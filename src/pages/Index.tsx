import React, { useState } from 'react';
import { Search, Waves, Clock, Zap, Triangle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProblemaDetaliata } from '@/components/ProblemaDetaliata';
import { problemeData } from '@/data/problemeData';
import type { Problema } from '@/types/problema';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('toate');
  const [selectedDifficulty, setSelectedDifficulty] = useState('toate');
  const [selectedProblem, setSelectedProblem] = useState<Problema | null>(null);

  const categorii = [
    { id: 'unde', nume: 'Unde', icon: Waves, color: 'bg-blue-100 text-blue-700' },
    { id: 'pendule', nume: 'Pendule', icon: Clock, color: 'bg-green-100 text-green-700' },
    { id: 'seisme', nume: 'Seisme', icon: Zap, color: 'bg-red-100 text-red-700' },
    { id: 'difractie', nume: 'Difracția Luminii', icon: Triangle, color: 'bg-purple-100 text-purple-700' }
  ];

  const difficultati = [
    { id: 'usoare', nume: 'Ușoare', color: 'bg-green-500' },
    { id: 'medii', nume: 'Medii', color: 'bg-yellow-500' },
    { id: 'grele', nume: 'Grele', color: 'bg-orange-500' },
    { id: 'dificile', nume: 'Dificile', color: 'bg-red-500' }
  ];

  const filteredProblems = problemeData.filter(problema => {
    const matchesSearch = problema.titlu.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problema.cerinte.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'toate' || problema.categorie === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'toate' || problema.dificultate === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  if (selectedProblem) {
    return (
      <ProblemaDetaliata 
        problema={selectedProblem} 
        onBack={() => setSelectedProblem(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-gray-900">PULS</h1>
              <span className="text-lg text-gray-600">Probleme de Fizică</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Titlu și descriere */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resurse</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Accesează materiale educaționale pentru studiul fizicii, categorizate după nivelul de 
            dificultate și tipul de conținut.
          </p>
        </div>

        {/* Tabs pentru categorii */}
        <Tabs defaultValue="formule" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 bg-gray-100">
            <TabsTrigger value="formule" className="data-[state=active]:bg-black data-[state=active]:text-white">
              Formule
            </TabsTrigger>
            <TabsTrigger value="lectii">Lecții</TabsTrigger>
            <TabsTrigger value="experimente">Experimente</TabsTrigger>
            <TabsTrigger value="bibliografie">Bibliografie</TabsTrigger>
          </TabsList>

          <TabsContent value="formule" className="mt-8">
            {/* Căutare și filtre */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Caută probleme..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="toate">Toate categoriile</option>
                  {categorii.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.nume}</option>
                  ))}
                </select>

                <select 
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="toate">Toate dificultățile</option>
                  {difficultati.map(diff => (
                    <option key={diff.id} value={diff.id}>{diff.nume}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Categorii de probleme */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {categorii.map((categoria) => {
                const Icon = categoria.icon;
                const problemsInCategory = filteredProblems.filter(p => p.categorie === categoria.id);
                
                return (
                  <Card key={categoria.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 rounded-full ${categoria.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-lg">{categoria.nume}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-gray-600">
                        {problemsInCategory.length} probleme disponibile
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Lista problemelor */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  Formule esențiale în fizică
                </h3>
                <p className="text-gray-600">
                  {filteredProblems.length} probleme găsite
                </p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {filteredProblems.map((problema) => {
                  const categoria = categorii.find(c => c.id === problema.categorie);
                  const dificultate = difficultati.find(d => d.id === problema.dificultate);
                  const Icon = categoria?.icon || Waves;
                  
                  return (
                    <div 
                      key={problema.id}
                      onClick={() => setSelectedProblem(problema)}
                      className="p-6 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className={`w-12 h-12 rounded-lg ${categoria?.color} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="text-lg font-semibold text-gray-900">
                                {problema.titlu}
                              </h4>
                              <Badge className={`${dificultate?.color} text-white`}>
                                {dificultate?.nume}
                              </Badge>
                            </div>
                            
                            <p className="text-gray-600 mb-3">{problema.descriere}</p>
                            
                            <div className="flex flex-wrap gap-2">
                              {problema.cerinte.slice(0, 2).map((cerinta, index) => (
                                <span 
                                  key={index}
                                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                                >
                                  {cerinta}
                                </span>
                              ))}
                              {problema.cerinte.length > 2 && (
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                  +{problema.cerinte.length - 2} mai multe
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">
                            {problema.punctajTotal}p
                          </div>
                          <div className="text-sm text-gray-500">
                            #{problema.index}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="lectii">
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600">Lecțiile vor fi disponibile în curând</h3>
            </div>
          </TabsContent>

          <TabsContent value="experimente">
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600">Experimentele vor fi disponibile în curând</h3>
            </div>
          </TabsContent>

          <TabsContent value="bibliografie">
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600">Bibliografia va fi disponibilă în curând</h3>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
