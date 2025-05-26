
import React from 'react';
import { ArrowLeft, Bot, Calculator, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Problema } from '@/types/problema';

interface ProblemaDetaliataProps {
  problema: Problema;
  onBack: () => void;
}

export const ProblemaDetaliata: React.FC<ProblemaDetaliataProps> = ({ problema, onBack }) => {
  const getDifficultyColor = (dificultate: string) => {
    switch (dificultate) {
      case 'usoare': return 'bg-green-500';
      case 'medii': return 'bg-yellow-500';
      case 'grele': return 'bg-orange-500';
      case 'dificile': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryName = (categorie: string) => {
    switch (categorie) {
      case 'unde': return 'Unde';
      case 'pendule': return 'Pendule';
      case 'seisme': return 'Seisme';
      case 'difractie': return 'Difracția Luminii';
      default: return categorie;
    }
  };

  const getDifficultyName = (dificultate: string) => {
    switch (dificultate) {
      case 'usoare': return 'Ușoare';
      case 'medii': return 'Medii';
      case 'grele': return 'Grele';
      case 'dificile': return 'Dificile';
      default: return dificultate;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Înapoi la probleme</span>
            </Button>
            <div className="flex items-center space-x-4">
              <Badge className={`${getDifficultyColor(problema.dificultate)} text-white`}>
                {getDifficultyName(problema.dificultate)}
              </Badge>
              <span className="text-sm text-gray-600">#{problema.index}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Conținutul principal */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {problema.titlu}
                    </CardTitle>
                    <p className="text-gray-600 mb-4">{problema.descriere}</p>
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline">{getCategoryName(problema.categorie)}</Badge>
                      <span className="text-lg font-semibold text-blue-600">
                        Total: {problema.punctajTotal} puncte
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {problema.continut}
                  </p>
                  
                  {problema.formule && problema.formule.length > 0 && (
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <Calculator className="w-4 h-4 mr-2" />
                        Formule relevante:
                      </h4>
                      <div className="space-y-2">
                        {problema.formule.map((formula, index) => (
                          <code key={index} className="block bg-white px-3 py-2 rounded border text-sm font-mono">
                            {formula}
                          </code>
                        ))}
                      </div>
                    </div>
                  )}

                  {problema.date && Object.keys(problema.date).length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Date cunoscute:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(problema.date).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600">{key.replace(/_/g, ' ')}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Cerințele problemei */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Cerințe</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {problema.subpuncte.map((subpunct, index) => (
                    <div key={subpunct.id} className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <span className="font-semibold text-blue-600">
                            {String.fromCharCode(97 + index)}){' '}
                          </span>
                          <span className="text-gray-800">{subpunct.cerinta}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar cu punctaje și acțiuni */}
          <div className="lg:col-span-1">
            <Card className="mb-6 sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">Punctaje</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {problema.subpuncte.map((subpunct, index) => (
                    <div key={subpunct.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">
                        Punctul {String.fromCharCode(97 + index)})
                      </span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        {subpunct.punctaj}p
                      </Badge>
                    </div>
                  ))}
                  
                  <Separator className="my-4" />
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-bold text-blue-900">Total</span>
                    <Badge className="bg-blue-600 text-white">
                      {problema.punctajTotal}p
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Buton pentru AI */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ajutor AI</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                  <Bot className="w-4 h-4 mr-2" />
                  Inteligența Artificială
                </Button>
                <p className="text-sm text-gray-600 mt-3">
                  Obține ajutor personalizat pentru rezolvarea acestei probleme.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
