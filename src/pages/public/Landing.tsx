import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Briefcase, Clock, TrendingUp, UserCheck, FileText, Users, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useBrandConfig } from "@/contexts/BrandConfigContext";
import Map, { Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

// Fake job data for the demo
const FAKE_JOBS = [
  { id: 1, lat: 60.1699, lng: 24.9384, title: "Developer" }, // Helsinki
  { id: 2, lat: 60.4518, lng: 22.2666, title: "Designer" },  // Turku
  { id: 3, lat: 61.4978, lng: 23.7610, title: "Project Manager" }, // Tampere
  { id: 4, lat: 65.0121, lng: 25.4651, title: "Sales" }, // Oulu
  { id: 5, lat: 62.2426, lng: 25.7473, title: "Marketing" }, // Jyväskylä
  { id: 6, lat: 60.2055, lng: 24.6559, title: "Logistics" }, // Espoo
];

const LandingTyokkari = () => {
  const navigate = useNavigate();
  const brandConfig = useBrandConfig();
  const brandNS = `brand-${brandConfig.brand_key}`;
  const { t } = useTranslation([brandNS]);

  const lt = (key: string) => t(`${brandNS}:landing.${key}`);

  const features = [
    { icon: Briefcase, title: lt("feature1Title"), description: lt("feature1Desc") },
    { icon: UserCheck, title: lt("feature2Title"), description: lt("feature2Desc") },
    { icon: Clock, title: lt("feature3Title"), description: lt("feature3Desc") },
    { icon: FileText, title: lt("feature4Title"), description: lt("feature4Desc") },
    { icon: TrendingUp, title: lt("feature5Title"), description: lt("feature5Desc") },
    { icon: Users, title: lt("feature6Title"), description: lt("feature6Desc") },
  ];

  const steps = [
    { number: "1", title: lt("howStep1Title"), description: lt("howStep1Desc") },
    { number: "2", title: lt("howStep2Title"), description: lt("howStep2Desc") },
    { number: "3", title: lt("howStep3Title"), description: lt("howStep3Desc") },
  ];

  return (
    <>
      {/* Hero Section with Live Map Demo */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Map */}
        <div className="absolute inset-0 z-0 opacity-60">
          <Map
            initialViewState={{
              latitude: 63.5,
              longitude: 25.5,
              zoom: 4.5
            }}
            style={{ width: '100%', height: '100%' }}
            mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
            attributionControl={false}
          >
            {FAKE_JOBS.map((job) => (
              <Marker key={job.id} latitude={job.lat} longitude={job.lng}>
                <div className="relative">
                  <div className="absolute -inset-2 bg-primary/30 rounded-full animate-ping" />
                  <MapPin className="text-primary w-6 h-6 relative z-10 drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                </div>
              </Marker>
            ))}
          </Map>
        </div>

        {/* Hero Content Overlay (Glassmorphism) */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center bg-background/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
              {lt("heroTitle")}
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              {lt("heroSubtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg h-14 px-8" onClick={() => navigate("/jobs")}>
                {lt("heroBrowseJobs")}
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-background/50" onClick={() => navigate("/auth")}>
                {lt("heroCreateProfile")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Strip */}
      <section className="py-8 px-4 bg-muted/50 border-y relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">
            {lt("stripTitle")}
          </h3>
          <p className="text-muted-foreground">
            {lt("stripSubtitle")}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
               {lt("benefitsCardTitle")}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {lt("benefitsTitle")}
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              {lt("benefitsBody")}
            </p>
            <ul className="space-y-4">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                   {lt(`benefitsPoint${i}`)}
                </li>
              ))}
            </ul>
          </div>

          <Card className="shadow-2xl border-primary/10 overflow-hidden transform md:rotate-2">
            <CardContent className="p-0">
               <div className="bg-primary p-6 text-primary-foreground">
                  <h4 className="text-xl font-bold mb-1">{lt("benefitsCardTitle")}</h4>
                  <p className="opacity-90 text-sm">{lt("benefitsCardText")}</p>
               </div>
               <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-muted/50">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="font-medium">{lt("benefitsCardPoint1")}</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-muted/50">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-medium">{lt("benefitsCardPoint2")}</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-muted/50">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="font-medium">{lt("benefitsCardPoint3")}</span>
                  </div>
               </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {lt("featuresTitle")}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            {lt("howTitle")}
          </h3>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-muted z-0" />
            
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-background border-4 border-primary text-primary flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">
                  {step.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingTyokkari;
