import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Briefcase, Clock, TrendingUp, UserCheck, FileText, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useBrandConfig } from "@/contexts/BrandConfigContext";

const LandingTyokkari = () => {
  const navigate = useNavigate();
  const brandConfig = useBrandConfig();
  const brandNS = `brand-${brandConfig.brand_key}`;
  const { t } = useTranslation([brandNS]);

  const lt = (key: string) => t(`${brandNS}:landing.${key}`);

  const features = [
      {
        icon: Briefcase,
        title: lt("feature1Title"),
        description: lt("feature1Desc"),
      },
      {
        icon: UserCheck,
        title: lt("feature2Title"),
        description: lt("feature2Desc"),
      },
      {
        icon: Clock,
        title: lt("feature3Title"),
        description: lt("feature3Desc"),
      },
      {
        icon: FileText,
        title: lt("feature4Title"),
        description: lt("feature4Desc"),
      },
      {
        icon: TrendingUp,
        title: lt("feature5Title"),
        description: lt("feature5Desc"),
      },
      {
        icon: Users,
        title: lt("feature6Title"),
        description: lt("feature6Desc"),
      },
    ];

  const steps = [
    {
      number: "1",
      title: lt("howStep1Title"),
      description: lt("howStep1Desc"),
    },
    {
      number: "2",
      title: lt("howStep2Title"),
      description: lt("howStep2Desc"),
    },
    {
      number: "3",
      title: lt("howStep3Title"),
      description: lt("howStep3Desc"),
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero),var(--gradient-pattern)]" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {lt("heroTitle")}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {lt("heroSubtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/jobs")}>
              {lt("heroBrowseJobs")}
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/auth")}>
              {lt("heroCreateProfile")}
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Strip */}
      <section className="py-8 px-4 bg-muted/50 border-y">
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              {lt("benefitsTitle")}
            </h3>
            <p className="text-muted-foreground mb-4">
              {lt("benefitsBody")}
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• {lt("benefitsPoint1")}</li>
              <li>• {lt("benefitsPoint2")}</li>
              <li>• {lt("benefitsPoint3")}</li>
            </ul>
          </div>

          <Card className="shadow-sm">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold mb-2 text-foreground">
                {lt("benefitsCardTitle")}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {lt("benefitsCardText")}
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span>{lt("benefitsCardPoint1")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{lt("benefitsCardPoint2")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <span>{lt("benefitsCardPoint3")}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-10 text-foreground">
            {lt("featuresTitle")}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <feature.icon className="w-10 h-10 mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            {lt("howTitle")}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">
                  {step.title}
                </h4>
                <p className="text-muted-foreground">
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
