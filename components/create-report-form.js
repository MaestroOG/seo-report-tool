'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Plus, Trash, Download } from 'lucide-react'
import Toggle from './generalComps/Toggle'

export default function CreateReportForm() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    /* ---------------- Form State ---------------- */

    const [form, setForm] = useState({
        clientName: '',
        website: '',
        reportingPeriod: '',
        preparedBy: '',
        executiveSummary: '',

        websiteOverview: {
            domainAge: '',
            cms: '',
            industry: '',
            targetAudience: '',
            targetLocation: ''
        },

        organicSessions: '',
        users: '',
        trafficGrowthPercent: '',

        keywords: [{ keyword: '', searchVolume: '', difficulty: '' }],
        competitors: [{ name: '', domain: '', notes: '' }],

        titleMetaOK: true,
        headingsOK: true,
        imagesAltTextOK: true,
        internalLinkingOK: false,

        totalBacklinks: '',
        referringDomains: '',
        toxicBacklinksDetected: false,

        plan30: '',
        plan60: '',
        plan90: ''
    })

    /* ---------------- Helpers ---------------- */

    const update = (key, value) =>
        setForm(prev => ({ ...prev, [key]: value }))

    const updateArray = (name, index, key, value) => {
        const copy = [...(form)[name]]
        copy[index][key] = value
        update(name, copy)
    }

    const addKeyword = () =>
        update('keywords', [...form.keywords, { keyword: '', searchVolume: '', difficulty: '' }])

    const removeKeyword = (i) =>
        update('keywords', form.keywords.filter((_, idx) => idx !== i))

    const addCompetitor = () =>
        update('competitors', [...form.competitors, { name: '', domain: '', notes: '' }])

    const removeCompetitor = (i) =>
        update('competitors', form.competitors.filter((_, idx) => idx !== i))

    /* ---------------- Submit ---------------- */



    /* ---------------- UI ---------------- */

    return (
        <div className="mx-auto max-w-5xl p-4 sm:p-6 lg:p-10">
            <div className="flex flex-col gap-6">

                <header>
                    <h1 className="text-2xl font-bold text-slate-900">Create SEO Report</h1>
                    <p className="text-sm text-slate-600">
                        Fill the form and download a professional PDF.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                    {/* LEFT COLUMN */}
                    <div className="md:col-span-2 space-y-6">

                        {/* Basic Info */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Basic Info</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-3 sm:grid-cols-2">
                                <div className='grid gap-3'>
                                    <Label>Client Name</Label>
                                    <Input value={form.clientName} onChange={e => update('clientName', e.target.value)} />
                                </div>
                                <div className='grid gap-3'>
                                    <Label>Website</Label>
                                    <Input value={form.website} onChange={e => update('website', e.target.value)} />
                                </div>
                                <div className='grid gap-3'>
                                    <Label>Reporting Period</Label>
                                    <Input value={form.reportingPeriod} onChange={e => update('reportingPeriod', e.target.value)} />
                                </div>
                                <div className='grid gap-3'>
                                    <Label>Prepared By</Label>
                                    <Input value={form.preparedBy} onChange={e => update('preparedBy', e.target.value)} />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Website Overview */}

                        <Card>
                            <CardHeader>
                                <CardTitle>Website Overview</CardTitle>
                            </CardHeader>

                            <CardContent className="grid gap-4 sm:grid-cols-2">
                                <div className='grid gap-3'>
                                    <Label>Domain Age</Label>
                                    <Input
                                        placeholder="e.g. 3 Years"
                                        value={form.websiteOverview.domainAge}
                                        onChange={e => updateOverview('domainAge', e.target.value)}
                                    />
                                </div>

                                <div className='grid gap-3'>
                                    <Label>CMS</Label>
                                    <Input
                                        placeholder="e.g. WordPress"
                                        value={form.websiteOverview.cms}
                                        onChange={e => updateOverview('cms', e.target.value)}
                                    />
                                </div>

                                <div className='grid gap-3'>
                                    <Label>Industry</Label>
                                    <Input
                                        placeholder="e.g. Technology Services"
                                        value={form.websiteOverview.industry}
                                        onChange={e => updateOverview('industry', e.target.value)}
                                    />
                                </div>

                                <div className='grid gap-3'>
                                    <Label>Target Audience</Label>
                                    <Input
                                        placeholder="e.g. Businesses & Professionals"
                                        value={form.websiteOverview.targetAudience}
                                        onChange={e => updateOverview('targetAudience', e.target.value)}
                                    />
                                </div>

                                <div className="grid gap-3 sm:col-span-2">
                                    <Label>Target Location</Label>
                                    <Input
                                        placeholder="e.g. Global"
                                        value={form.websiteOverview.targetLocation}
                                        onChange={e => updateOverview('targetLocation', e.target.value)}
                                    />
                                </div>
                            </CardContent>
                        </Card>


                        {/* Executive Summary */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Executive Summary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Textarea
                                    value={form.executiveSummary}
                                    onChange={e => update('executiveSummary', e.target.value)}
                                    className="min-h-30"
                                />
                            </CardContent>
                        </Card>

                        {/* Keywords */}
                        <Card>
                            <CardHeader className="flex items-center justify-between">
                                <CardTitle>Keyword Performance</CardTitle>
                                <Button size="sm" variant="outline" onClick={addKeyword}>
                                    <Plus className="mr-2 h-4 w-4" /> Add
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {form.keywords.map((k, i) => (
                                    <div key={i} className="grid gap-2 border p-3 rounded-md sm:grid-cols-5">
                                        <Input
                                            placeholder="Keyword"
                                            value={k.keyword}
                                            onChange={e => updateArray('keywords', i, 'keyword', e.target.value)}
                                        />
                                        <Input
                                            type="number"
                                            placeholder="Volume"
                                            value={k.searchVolume}
                                            onChange={e => updateArray('keywords', i, 'searchVolume', e.target.value)}
                                        />
                                        <Input
                                            type="number"
                                            placeholder="Difficulty"
                                            value={k.difficulty}
                                            onChange={e => updateArray('keywords', i, 'difficulty', e.target.value)}
                                        />
                                        <Button variant="destructive" size="icon" onClick={() => removeKeyword(i)}>
                                            <Trash className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Action Plan */}
                        <Card>
                            <CardHeader>
                                <CardTitle>SEO Action Plan</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-3">
                                <Textarea placeholder="30 Days" value={form.plan30} onChange={e => update('plan30', e.target.value)} />
                                <Textarea placeholder="60 Days" value={form.plan60} onChange={e => update('plan60', e.target.value)} />
                                <Textarea placeholder="90 Days" value={form.plan90} onChange={e => update('plan90', e.target.value)} />
                            </CardContent>
                        </Card>
                    </div>

                    {/* RIGHT COLUMN */}
                    <aside className="space-y-6">

                        <Card>
                            <CardHeader>
                                <CardTitle>Key Metrics</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Input placeholder="Organic Sessions" value={form.organicSessions} onChange={e => update('organicSessions', e.target.value)} />
                                <Input placeholder="Users" value={form.users} onChange={e => update('users', e.target.value)} />
                                <Input placeholder="Growth %" value={form.trafficGrowthPercent} onChange={e => update('trafficGrowthPercent', e.target.value)} />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>On-page SEO</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Toggle label="Title & Meta" checked={form.titleMetaOK} onChange={v => update('titleMetaOK', v)} />
                                <Toggle label="Headings" checked={form.headingsOK} onChange={v => update('headingsOK', v)} />
                                <Toggle label="Images Alt Text" checked={form.imagesAltTextOK} onChange={v => update('imagesAltTextOK', v)} />
                                <Toggle label="Internal Linking" checked={form.internalLinkingOK} onChange={v => update('internalLinkingOK', v)} />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Backlinks</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Input placeholder="Total Backlinks" value={form.totalBacklinks} onChange={e => update('totalBacklinks', e.target.value)} />
                                <Input placeholder="Referring Domains" value={form.referringDomains} onChange={e => update('referringDomains', e.target.value)} />
                                <div className="flex items-center justify-between mt-2">
                                    <Label htmlFor={'toxicBacklinks'}>Toxic Backlinks</Label>
                                    <Checkbox
                                        id={'toxicBacklinks'}
                                        checked={form.toxicBacklinksDetected}
                                        onCheckedChange={v => update('toxicBacklinksDetected', Boolean(v))}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex items-center justify-between">
                                <CardTitle>Competitors</CardTitle>
                                <Button size="sm" variant="outline" onClick={addCompetitor}>
                                    <Plus className="mr-2 h-4 w-4" /> Add
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {form.competitors.map((c, i) => (
                                    <div key={i} className="border p-3 rounded-md space-y-2">
                                        <Input placeholder="Name" value={c.name} onChange={e => updateArray('competitors', i, 'name', e.target.value)} />
                                        <Input placeholder="Domain" value={c.domain} onChange={e => updateArray('competitors', i, 'domain', e.target.value)} />
                                        <Button size="icon" variant="destructive" onClick={() => removeCompetitor(i)}>
                                            <Trash className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                    </aside>
                </div>

                <div className="flex justify-end gap-3">
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    <Button disabled={loading} className="gap-2">
                        {loading ? 'Generating…' : 'Generate PDF'}
                        <Download className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
