const Skeleton = () => {
    const SkeletonBox = ({ className = "" }) => (
        <div className={`bg-gray-300 animate-pulse rounded ${className}`} />
    );

    const SkeletonLine = ({ width = "w-full" }) => (
        <SkeletonBox className={`h-4 ${width}`} />
    );

    return (
        <div className="min-h-screen bg-gray-50 p-6 space-y-6">
            {/* Header */}
            <SkeletonBox className="h-16 w-full" />
            
            {/* Main content */}
            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <SkeletonBox className="h-64 w-full" />
                    <div className="space-y-3">
                        <SkeletonLine width="w-3/4" />
                        <SkeletonLine />
                        <SkeletonLine />
                        <SkeletonLine width="w-5/6" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <SkeletonBox className="h-32" />
                        <SkeletonBox className="h-32" />
                    </div>
                </div>
                
                {/* Sidebar */}
                <div className="space-y-6">
                    <SkeletonBox className="h-48" />
                    <div className="space-y-3">
                        {Array(6).fill(0).map((_, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <SkeletonBox className="h-10 w-10 rounded-full" />
                                <div className="flex-1 space-y-1">
                                    <SkeletonLine width="w-3/4" />
                                    <SkeletonBox className="h-3 w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {Array(3).fill(0).map((_, i) => (
                    <div key={i} className="space-y-3">
                        <SkeletonBox className="h-40" />
                        <SkeletonLine width="w-3/4" />
                        <SkeletonBox className="h-3 w-1/2" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skeleton;