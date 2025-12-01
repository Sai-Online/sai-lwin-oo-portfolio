import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Award, Briefcase, GraduationCap, Code, TrendingUp, Users, FileText, BarChart, Search } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary">Sai Lwin Oo</h2>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection("education")} className="text-sm font-medium hover:text-primary transition-colors">Education</button>
              <button onClick={() => scrollToSection("experience")} className="text-sm font-medium hover:text-primary transition-colors">Experience</button>
              <button onClick={() => scrollToSection("skills")} className="text-sm font-medium hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20 px-6 bg-gradient-to-br from-primary via-primary to-accent min-h-screen flex items-center overflow-hidden">
        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/60 rounded-full animate-ping" style={{ animationDelay: "0.5s" }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                  👋 Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hey There,
                <br />
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  I'm Sai Lwin Oo
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-2xl text-white/95 font-medium leading-relaxed">
                  International Business Student
                </p>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  Accounting & Finance Enthusiast | Business Development Support | ACCA Student preparing for excellence
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">5+</div>
                  <div className="text-sm text-white/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">3</div>
                  <div className="text-sm text-white/70">Certificates</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">3+</div>
                  <div className="text-sm text-white/70">Achievements</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection("contact")} 
                  size="lg" 
                  variant="secondary" 
                  className="font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </Button>
                <Button 
                  onClick={() => scrollToSection("about")} 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* Right Content - Modern Profile Card */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute -inset-8 border-2 border-white/10 rounded-3xl rotate-6"></div>
                <div className="absolute -inset-4 border-2 border-white/20 rounded-3xl -rotate-3"></div>
                
                {/* Main Card */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="space-y-6">
                    {/* Profile Image */}
                    <div className="relative mx-auto w-64 h-64">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-2xl blur-xl opacity-50"></div>
                      <img 
                        src={profileImage} 
                        alt="Sai Lwin Oo - Professional Profile" 
                        className="relative w-full h-full rounded-2xl object-cover border-4 border-white/30 shadow-xl"
                      />
                      {/* Status Badge */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-white rounded-full shadow-lg flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-primary">Available for Internships</span>
                      </div>
                    </div>

                    {/* Info Cards */}
                    <div className="space-y-3 pt-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <Mail className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-left">
                            <div className="text-xs text-white/70">Email</div>
                            <div className="text-sm font-medium text-white">saii.lwinnoo@gmail.com</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-left">
                            <div className="text-xs text-white/70">Location</div>
                            <div className="text-sm font-medium text-white">Pathum Thani, Thailand</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-left">
                            <div className="text-xs text-white/70">Education</div>
                            <div className="text-sm font-medium text-white">Rangsit University</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          <Card className="shadow-lg border-0" style={{ boxShadow: "var(--card-shadow)" }}>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Sai Lwin Oo is a final-year International Business student with strong interests in accounting, finance, and business development. He is an ACCA student preparing for the F3 Financial Accounting exam and experienced in operations, business support, data handling, and research. With a proven track record in competitive business environments and academic excellence, Sai brings strong organizational, analytical, and communication skills to every project he undertakes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          <div className="space-y-6">
            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Bachelor of Business Administration (International Business)</CardTitle>
                    <CardDescription className="text-base mt-1">Rangsit University</CardDescription>
                    <p className="text-sm text-muted-foreground mt-2">2022 – Present</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Bachelor of Commerce</CardTitle>
                    <CardDescription className="text-base mt-1">Yangon University of Economics</CardDescription>
                    <p className="text-sm text-muted-foreground mt-2">2018 – 2020 (Second Year Completed)</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">ACCA – Association of Chartered Certified Accountants</CardTitle>
                    <CardDescription className="text-base mt-1">Student Member</CardDescription>
                    <p className="text-sm text-muted-foreground mt-2">2025 – Present (Preparing for F3 Financial Accounting exam)</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          <div className="space-y-6">
            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Operations Assistant</CardTitle>
                    <CardDescription className="text-base mt-1">W&W Winery</CardDescription>
                    <p className="text-sm text-muted-foreground mt-2">2020 – 2022</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Assigned and supervised daily staff tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ensured smooth daily operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Supported basic inventory and operational coordination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Peer Mentor</CardTitle>
                    <CardDescription className="text-base mt-1">RIC Language Center</CardDescription>
                    <p className="text-sm text-muted-foreground mt-2">2022 – 2023</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Assisted peers with English learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Improved communication and academic confidence among students</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" />
                  Hard Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Financial Accounting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Financial Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Microsoft Excel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">MS Office Suite</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Market Research</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Data Interpretation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Business Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Content Creation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Digital Marketing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Canva</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Detail-Oriented</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Team Collaboration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Adaptability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Communication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Leadership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Organization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">English (Fluent)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Burmese (Native)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Services I Offer</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl hover:scale-105" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Accounting Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Professional accounting assistance including bookkeeping, financial reporting, and ACCA-level accounting support.</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl hover:scale-105" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Business Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Comprehensive business support services including operations, administrative tasks, and process optimization.</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl hover:scale-105" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Financial Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Detailed financial analysis, data interpretation, and actionable business insights for informed decision-making.</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl hover:scale-105" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Business Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Strategic business development assistance including market analysis, growth strategies, and partnership opportunities.</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl hover:scale-105" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Market Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Comprehensive market research and competitive analysis to support strategic business decisions.</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl hover:scale-105" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Business Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Professional business reporting, documentation, and presentation creation for stakeholders.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects & Achievements */}
      <section id="projects" className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Projects & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="space-y-6">
            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Semi-finalist – L'Oréal Brandstorm 2024</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Competed at the semi-final level in L'Oréal's premier international business competition, developing innovative marketing strategies for global beauty brands.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">1st Runner-Up – Business Pitch Competition EP.1</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Secured second place in the RSU International College Business Pitch Competition in Thailand, presenting a comprehensive business proposal.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Research Paper – ICTHM 2025</CardTitle>
                    <CardDescription className="text-base mt-2">
                      "MICE as a Magnet: The Impact of MICE Events on Long-Term FDI Commitments and Economic Growth in Developing Countries."
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Certificates</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">Understanding Capital Markets</CardTitle>
                    <CardDescription className="text-sm mt-1">Strategy First</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">Accounting 1</CardTitle>
                    <CardDescription className="text-sm mt-1">University of Lausanne</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">Work Smarter with Microsoft Excel</CardTitle>
                    <CardDescription className="text-sm mt-1">Microsoft</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary via-primary to-accent text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:saii.lwinnoo@gmail.com" className="text-white/90 hover:text-white transition-colors">
                    saii.lwinnoo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:0620460772" className="text-white/90 hover:text-white transition-colors">
                    0620460772
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-white/90">Pathum Thani, Thailand</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  variant="secondary"
                  className="w-full font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-background border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Sai Lwin Oo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
