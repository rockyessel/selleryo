'use client';

import { useState } from 'react';
import MarketPlace3DRenderPortal from '.';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const MarketPlaceCanvasComponent = () => {
  const [dialogState, setDialogState] = useState(false);
  console.log('dialogState: ', dialogState);
  return (
    <Dialog onOpenChange={(open) => setDialogState(open)} open={dialogState}>
      <DialogTrigger asChild>
        <div className='grow justify-center px-12 py-6 rounded-lg border border-solid border-zinc-500 max-md:px-5'>
          See this item in 3D
        </div>
      </DialogTrigger>
      <DialogContent className='max-w-full mt-10 h-full rounded-t-lg'>
        <DialogHeader className='max-w-full p-3 flex flex-row items-center justify-center border-b h-5'>
          <div>In 3D View</div>
          <Button
            onClick={() => setDialogState(false)}
            className='p-2'
            variant='outline'
          >
            <X strokeWidth={0.5} />
          </Button>
        </DialogHeader>
        <Canvas className='w-full h-full cursor-grab'>
          <MarketPlace3DRenderPortal />
          <ambientLight />
          <boxGeometry args={[3.5, 3.5, 3.5]} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
        </Canvas>
      </DialogContent>
    </Dialog>
  );
};

export default MarketPlaceCanvasComponent;
