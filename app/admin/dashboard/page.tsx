'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  Shield, 
  Users, 
  FileText, 
  MessageCircle, 
  TrendingUp, 
  Settings,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Plus,
  BarChart3,
  DollarSign,
  Clock,
  AlertTriangle,
  CheckCircle,
  LogOut
} from 'lucide-react';

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-700 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">LegalAI Admin</span>
              <Badge variant="destructive" className="hidden sm:inline-flex">
                Administration
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-red-100 text-red-600 text-sm font-medium">
                  AD
                </AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Tableau de Bord Administrateur 🛡️
          </h1>
          <p className="text-gray-600">
            Gérez et surveillez l'ensemble de la plateforme LegalAI Pro
          </p>
        </div>

        {/* Admin Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Utilisateurs Total</p>
                  <p className="text-2xl font-bold text-gray-900">2,847</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +18% ce mois
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenus Mensuel</p>
                  <p className="text-2xl font-bold text-gray-900">€89,240</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +24% vs mois dernier
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Questions IA/jour</p>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <BarChart3 className="h-3 w-3 mr-1" />
                    Moyenne: 1,150
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Incidents Ouverts</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                  <p className="text-xs text-orange-600 flex items-center mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    2 critiques
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-[500px]">
            <TabsTrigger value="users">Utilisateurs</TabsTrigger>
            <TabsTrigger value="content">Contenu</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Gestion des Utilisateurs</CardTitle>
                    <CardDescription>
                      Gérez les comptes utilisateurs et leurs abonnements
                    </CardDescription>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Nouvel Utilisateur
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <div className="flex-1">
                    <Input
                      placeholder="Rechercher un utilisateur..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="max-w-sm"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtres
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Exporter
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Utilisateur</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Inscription</TableHead>
                      <TableHead>Dernière connexion</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: 'Jean Dupont',
                        email: 'jean.dupont@email.com',
                        plan: 'Professional',
                        status: 'Actif',
                        inscription: '15 Mars 2024',
                        derniere: '2 heures',
                        avatar: 'JD'
                      },
                      {
                        name: 'Marie Martin',
                        email: 'marie.martin@email.com',
                        plan: 'Starter',
                        status: 'Actif',
                        inscription: '12 Mars 2024',
                        derniere: '1 jour',
                        avatar: 'MM'
                      },
                      {
                        name: 'Pierre Bernard',
                        email: 'pierre.bernard@email.com',
                        plan: 'Enterprise',
                        status: 'Suspendu',
                        inscription: '8 Mars 2024',
                        derniere: '5 jours',
                        avatar: 'PB'
                      },
                      {
                        name: 'Sophie Dubois',
                        email: 'sophie.dubois@email.com',
                        plan: 'Professional',
                        status: 'Essai',
                        inscription: '20 Mars 2024',
                        derniere: '30 min',
                        avatar: 'SD'
                      }
                    ].map((user, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                                {user.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            user.plan === 'Enterprise' ? 'default' :
                            user.plan === 'Professional' ? 'secondary' : 'outline'
                          }>
                            {user.plan}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            user.status === 'Actif' ? 'default' :
                            user.status === 'Essai' ? 'secondary' : 'destructive'
                          }>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">
                          {user.inscription}
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">
                          Il y a {user.derniere}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Gestion du Contenu Juridique</CardTitle>
                <CardDescription>
                  Gérez la base de connaissances et les modèles de documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border">
                    <CardContent className="p-6 text-center">
                      <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Modèles de Documents</h3>
                      <p className="text-sm text-gray-600 mb-4">247 modèles actifs</p>
                      <Button variant="outline" className="w-full">
                        Gérer les modèles
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border">
                    <CardContent className="p-6 text-center">
                      <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Base de Connaissances</h3>
                      <p className="text-sm text-gray-600 mb-4">1,847 articles</p>
                      <Button variant="outline" className="w-full">
                        Modifier les articles
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border">
                    <CardContent className="p-6 text-center">
                      <Settings className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Configuration IA</h3>
                      <p className="text-sm text-gray-600 mb-4">Version 2.1.4</p>
                      <Button variant="outline" className="w-full">
                        Paramètres IA
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Utilisation de l'IA</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Questions juridiques</span>
                      <span className="font-medium">1,247/jour</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Génération de documents</span>
                      <span className="font-medium">389/jour</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-1/2"></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm">Temps de réponse moyen</span>
                      <span className="font-medium">1.2s</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Performance Système</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Disponibilité</span>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-medium">99.9%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">CPU Usage</span>
                      <span className="font-medium">23%</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Memory Usage</span>
                      <span className="font-medium">67%</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Storage</span>
                      <span className="font-medium">2.1TB utilisés</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="support" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Tickets de Support</CardTitle>
                <CardDescription>
                  Gérez les demandes d'assistance des utilisateurs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: '#2024-001',
                      user: 'Jean Dupont',
                      subject: 'Problème génération contrat',
                      priority: 'Haute',
                      status: 'Ouvert',
                      created: '2 heures'
                    },
                    {
                      id: '#2024-002',
                      user: 'Marie Martin',
                      subject: 'Question sur facturation',
                      priority: 'Moyenne',
                      status: 'En cours',
                      created: '5 heures'
                    },
                    {
                      id: '#2024-003',
                      user: 'Pierre Bernard',
                      subject: 'Demande de fonctionnalité',
                      priority: 'Basse',
                      status: 'Fermé',
                      created: '1 jour'
                    }
                  ].map((ticket, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <Badge variant="outline">{ticket.id}</Badge>
                        <div>
                          <h4 className="font-medium">{ticket.subject}</h4>
                          <p className="text-sm text-gray-600">{ticket.user} • Il y a {ticket.created}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={
                          ticket.priority === 'Haute' ? 'destructive' :
                          ticket.priority === 'Moyenne' ? 'default' : 'secondary'
                        }>
                          {ticket.priority}
                        </Badge>
                        <Badge variant={
                          ticket.status === 'Ouvert' ? 'destructive' :
                          ticket.status === 'En cours' ? 'default' : 'secondary'
                        }>
                          {ticket.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          Voir
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Paramètres Système</CardTitle>
                <CardDescription>
                  Configuration générale de la plateforme
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Paramètres IA</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Modèle IA Principal</Label>
                        <Input defaultValue="GPT-4 Turbo" />
                      </div>
                      <div>
                        <Label>Température</Label>
                        <Input defaultValue="0.7" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Limites Utilisateur</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label>Plan Starter (questions/mois)</Label>
                        <Input defaultValue="50" />
                      </div>
                      <div>
                        <Label>Plan Professional</Label>
                        <Input defaultValue="Illimité" />
                      </div>
                      <div>
                        <Label>Plan Enterprise</Label>
                        <Input defaultValue="Illimité" />
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Sauvegarder les paramètres
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}