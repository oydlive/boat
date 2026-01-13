import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeatureCard({ image, title, description }) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300">
      <div className="h-48 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
