'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Scale, 
  FileText, 
  Users, 
  Settings, 
  ArrowLeft,
  Download,
  Eye
} from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">LegalAI Pro</span>
              </Link>
              <Badge variant="outline">Documentation</Badge>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Documentation Technique 📚
          </h1>
          <p className="text-gray-600">
            Diagrammes et spécifications de l'application LegalAI Pro
          </p>
        </div>

        <Tabs defaultValue="use-case" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[500px]">
            <TabsTrigger value="use-case">Cas d'Usage</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="database">Base de Données</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>

          <TabsContent value="use-case" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Diagramme de Cas d'Utilisation
                    </CardTitle>
                    <CardDescription>
                      Vue d'ensemble des interactions utilisateurs avec la plateforme
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Exporter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Plein écran
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-white border rounded-lg p-6 overflow-auto">
                  <div className="mermaid-container">
                    <pre className="text-sm text-gray-700 whitespace-pre-wrap">
{`graph TB
    %% Acteurs
    AE[👤 Auto-entrepreneur]
    ADMIN[🛡️ Administrateur]
    IA[🤖 Assistant IA]
    SYS[⚙️ Système]

    %% Cas d'utilisation - Authentification
    subgraph AUTH["🔐 Authentification"]
        UC1[Se connecter]
        UC2[Créer un compte]
        UC3[Réinitialiser mot de passe]
        UC4[Gérer profil]
    end

    %% Cas d'utilisation - Assistant IA
    subgraph AI["🤖 Assistant IA Juridique"]
        UC5[Poser question juridique]
        UC6[Obtenir conseil personnalisé]
        UC7[Rechercher dans base légale]
        UC8[Analyser situation juridique]
    end

    %% Cas d'utilisation - Documents
    subgraph DOC["📄 Gestion Documents"]
        UC9[Générer contrat]
        UC10[Créer facture]
        UC11[Rédiger CGV]
        UC12[Télécharger document]
        UC13[Modifier template]
        UC14[Archiver document]
    end

    %% Relations Auto-entrepreneur
    AE --> UC1
    AE --> UC2
    AE --> UC5
    AE --> UC9
    AE --> UC10
    AE --> UC11

    %% Relations Administrateur
    ADMIN --> UC1
    ADMIN --> UC13

    %% Relations IA
    IA --> UC5
    IA --> UC6
    IA --> UC9`}
                    </pre>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="border">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-blue-600 mb-2">🔐 Authentification</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Se connecter</li>
                        <li>• Créer un compte</li>
                        <li>• Réinitialiser mot de passe</li>
                        <li>• Gérer profil</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-green-600 mb-2">🤖 Assistant IA</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Poser question juridique</li>
                        <li>• Obtenir conseil personnalisé</li>
                        <li>• Rechercher dans base légale</li>
                        <li>• Analyser situation juridique</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-purple-600 mb-2">📄 Documents</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Générer contrat</li>
                        <li>• Créer facture</li>
                        <li>• Rédiger CGV</li>
                        <li>• Télécharger document</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-orange-600 mb-2">✅ Conformité</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Consulter échéances</li>
                        <li>• Recevoir rappels</li>
                        <li>• Vérifier obligations</li>
                        <li>• Suivre statut conformité</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-red-600 mb-2">🛡️ Administration</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Gérer utilisateurs</li>
                        <li>• Consulter analytics</li>
                        <li>• Configurer IA</li>
                        <li>• Support technique</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-600 mb-2">⚙️ Système</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Traiter paiements</li>
                        <li>• Envoyer notifications</li>
                        <li>• Sauvegarder données</li>
                        <li>• Générer rapports</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Architecture Système
                </CardTitle>
                <CardDescription>
                  Structure technique de l'application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Settings className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Diagramme d'architecture en cours de développement</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="database" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Modèle de Base de Données
                </CardTitle>
                <CardDescription>
                  Structure des données et relations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Schéma de base de données en cours de développement</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  Documentation API
                </CardTitle>
                <CardDescription>
                  Endpoints et spécifications techniques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Scale className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Documentation API en cours de développement</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}