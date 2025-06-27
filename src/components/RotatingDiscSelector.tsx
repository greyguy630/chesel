
import React, { useState, useEffect, useRef } from 'react';

interface RotatingDiscSelectorProps {
  values: string[];
  unit: string;
  onValueChange: (value: string) => void;
  initialValue?: string;
}

export const RotatingDiscSelector = ({ 
  values, 
  unit, 
  onValueChange, 
  initialValue 
}: RotatingDiscSelectorProps) => {
  const [selectedIndex, setSelectedIndex] = useState(
    initialValue ? values.indexOf(initialValue) : Math.floor(values.length / 2)
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    onValueChange(values[selectedIndex]);
  }, [selectedIndex, values, onValueChange]);

  const handleScroll = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 1 : -1;
    const newIndex = Math.max(0, Math.min(values.length - 1, selectedIndex + delta));
    setSelectedIndex(newIndex);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const relativeY = touch.clientY - rect.top;
    const centerY = rect.height / 2;
    const itemHeight = 60;
    const offset = Math.round((centerY - relativeY) / itemHeight);
    
    const newIndex = Math.max(0, Math.min(values.length - 1, selectedIndex + offset));
    if (newIndex !== selectedIndex) {
      setSelectedIndex(newIndex);
    }
  };

  const getItemStyle = (index: number) => {
    const distance = Math.abs(index - selectedIndex);
    const opacity = Math.max(0.2, 1 - distance * 0.3);
    const scale = Math.max(0.6, 1 - distance * 0.15);
    const translateY = (index - selectedIndex) * 60;
    
    return {
      opacity,
      transform: `translateY(${translateY}px) scale(${scale})`,
      fontSize: index === selectedIndex ? '2rem' : '1.5rem',
      fontWeight: index === selectedIndex ? 'bold' : 'normal',
      color: index === selectedIndex ? '#000' : '#666',
      transition: isDragging ? 'none' : 'all 0.3s ease-out',
    };
  };

  return (
    <div className="flex flex-col items-center h-full relative">
      <div className="text-lg font-semibold mb-4 text-gray-800">{unit}</div>
      
      {/* Selection indicator line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 z-10 pointer-events-none" 
           style={{ transform: 'translateY(-50%)' }} />
      
      {/* Rotating disc container */}
      <div
        ref={containerRef}
        className="relative h-80 w-full overflow-hidden flex flex-col items-center justify-center"
        onWheel={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, rgba(255,255,255,0.9) 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        }}
      >
        {values.map((value, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center cursor-pointer select-none"
            style={{
              height: '60px',
              width: '100%',
              ...getItemStyle(index),
            }}
            onClick={() => setSelectedIndex(index)}
          >
            <span className="font-mono">
              {value}
            </span>
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for 3D effect */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </div>
  );
};
