/*
2 * This file is part of the nivo project.
3 *
4 * Copyright 2016-present, Raphaël Benitte.
5 *
6 * For the full copyright and license information, please view the LICENSE
7 * file that was distributed with this source code.
8 */
9import { Component, useState, useEffect } from 'react'
10import range from 'lodash/range'
11import last from 'lodash/last'
12import { storiesOf } from '@storybook/react'
13import { withKnobs, boolean, select } from '@storybook/addon-knobs'
14import { generateDrinkStats } from '@nivo/generators'
15import { Defs, linearGradientDef } from '@nivo/core'
16import { area, curveMonotoneX } from 'd3-shape'
17import * as time from 'd3-time'
18import { timeFormat } from 'd3-time-format'
19import { Line } from '../src'
20
21const data = generateDrinkStats(18)
22const commonProperties = {
23    width: 900,
24    height: 400,
25    margin: { top: 20, right: 20, bottom: 60, left: 80 },
26    data,
27    animate: true,
28    enableSlices: 'x',
29}
30
31const curveOptions = ['linear', 'monotoneX', 'step', 'stepBefore', 'stepAfter']
32
33const CustomSymbol = ({ size, color, borderWidth, borderColor }) => (
34    <g>
35        <circle fill="#fff" r={size / 2} strokeWidth={borderWidth} stroke={borderColor} />
36        <circle
37            r={size / 5}
38            strokeWidth={borderWidth}
39            stroke={borderColor}
40            fill={color}
41            fillOpacity={0.35}
42        />
43    </g>
44)
45
46const stories = storiesOf('Line', module)
47
48stories.addDecorator(withKnobs)
49
50stories.add(
51    'stacked lines',
52    () => (
53        <Line
54            {...commonProperties}
55            yScale={{
56                type: 'linear',
57                stacked: true,
58            }}
59            curve={select('curve', curveOptions, 'linear')}
60        />
61    ),
62    {
63        info: {
64            text: `
65                You can stack lines using the \`yScale.stacked\` property.
66                Please note that stacking is only supported for linear scales.
67            `,
68        },
69    }
70)
71
72stories.add(
73    'linear scale',
74    () => (
75        <Line
76            {...commonProperties}
77            curve="monotoneX"
78            data={[
79                {
80                    id: 'fake corp. A',
81                    data: [
82                        { x: 0, y: 7 },
83                        { x: 1, y: 5 },
84                        { x: 2, y: 11 },
85                        { x: 3, y: 9 },
86                        { x: 4, y: 13 },
87                        { x: 7, y: 16 },
88                        { x: 9, y: 12 },
89                    ],
90                },
91            ]}
92            xScale={{
93                type: 'linear',
94                min: 0,
95                max: 'auto',
96            }}
97            axisLeft={{
98                legend: 'linear scale',
99                legendOffset: 12,
100            }}
101            axisBottom={{
102                legend: 'linear scale',
103                legendOffset: -12,
104            }}
105        />
106    ),
107    {
108        info: {
109            text: `
110                By default, \`xScale\` is a point scale, but you can switch to linear using
111                the \`xScale.type\` property. It supports irregular intervals while \`point\`
112                scale doesn't.
113
114                If you want missing datums to appear as holes instead of connecting defined ones,
115                you should set their y value to \`null\`.
116            `,
117        },
118    }
119)
120
121stories.add('time scale', () => (
122    <Line
123        {...commonProperties}
124        data={[
125            {
126                id: 'fake corp. A',
127                data: [
128                    { x: '2018-01-01', y: 7 },
129                    { x: '2018-01-02', y: 5 },
130                    { x: '2018-01-03', y: 11 },
131                    { x: '2018-01-04', y: 9 },
132                    { x: '2018-01-05', y: 12 },
133                    { x: '2018-01-06', y: 16 },
134                    { x: '2018-01-07', y: 13 },
135                    { x: '2018-01-08', y: 13 },
136                ],
137            },
138            {
139                id: 'fake corp. B',
140                data: [
141                    { x: '2018-01-04', y: 14 },
142                    { x: '2018-01-05', y: 14 },
143                    { x: '2018-01-06', y: 15 },
144                    { x: '2018-01-07', y: 11 },
145                    { x: '2018-01-08', y: 10 },
146                    { x: '2018-01-09', y: 12 },
147                    { x: '2018-01-10', y: 9 },
148                    { x: '2018-01-11', y: 7 },
149                ],
150            },
151        ]}
152        xScale={{
153            type: 'time',
154            format: '%Y-%m-%d',
155            useUTC: false,
156            precision: 'day',
157        }}
158        xFormat="time:%Y-%m-%d"
159        yScale={{
160            type: 'linear',
161            stacked: boolean('stacked', false),
162        }}
163        axisLeft={{
164            legend: 'linear scale',
165            legendOffset: 12,
166        }}
167        axisBottom={{
168            format: '%b %d',
169            tickValues: 'every 2 days',
170            legend: 'time scale',
171            legendOffset: -12,
172        }}
173        curve={select('curve', curveOptions, 'monotoneX')}
174        enablePointLabel={true}
175        pointSymbol={CustomSymbol}
176        pointSize={16}
177        pointBorderWidth={1}
178        pointBorderColor={{
179            from: 'color',
180            modifiers: [['darker', 0.3]],
181        }}
182        useMesh={true}
183        enableSlices={false}
184    />
185))
186
187stories.add('logarithmic scale', () => (
188    <Line
189        {...commonProperties}
190        data={[
191            {
192                id: 'fake corp. A',
193                data: [
194                    { x: 1, y: 12 },
195                    { x: 2, y: 123 },
196                    { x: 3, y: 870 },
197                    { x: 4, y: 21000 },
198                    { x: 7, y: 400000 },
199                    { x: 9, y: 10000 },
200                    { x: 16, y: 10000000 },
201                ],
202            },
203        ]}
204        gridYValues={[10, 100, 1000, 10000, 100000, 1000000, 10000000]}
205        xScale={{
206            type: 'log',
207            base: 2,
208            max: 'auto',
209        }}
210        axisBottom={{
211            legend: 'logarithmic scale (base: 2)',
212            legendOffset: -12,
213        }}
214        yScale={{
215            type: 'log',
216            base: 10,
217            max: 'auto',
218        }}
219        axisLeft={{
220            tickValues: [10, 100, 1000, 10000, 100000, 1000000, 10000000],
221            legend: 'logarithmic scale (base: 10)',
222            legendOffset: 12,
223        }}
224        useMesh={true}
225        enableSlices={false}
226    />
227))
228
229stories.add('symmetric logarithmic scale', () => (
230    <Line
231        {...commonProperties}
232        data={[
233            {
234                id: 'fake corp. A',
235                data: [
236                    { x: 1, y: -12 },
237                    { x: 2, y: 123 },
238                    { x: 3, y: 870 },
239                    { x: 4, y: 210 },
240                    { x: 7, y: 400 },
241                    { x: 9, y: 100 },
242                    { x: 16, y: 1000 },
243                ],
244            },
245        ]}
246        xScale={{
247            type: 'linear',
248            max: 'auto',
249        }}
250        yScale={{
251            type: 'symlog',
252            max: 'auto',
253        }}
254        axisLeft={{
255            tickValues: [0, 100, 250, 500, 1000],
256            legend: 'symmetric logarithmic scale',
257            legendOffset: 12,
258        }}
259        useMesh={true}
260        enableSlices={false}
261    />
262))
263
264class RealTimeChart extends Component {
265    constructor(props) {
266        super(props)
267
268        const date = new Date()
269        date.setMinutes(0)
270        date.setSeconds(0)
271        date.setMilliseconds(0)
272
273        this.state = {
274            dataA: range(100).map(i => ({
275                x: time.timeMinute.offset(date, i * 30),
276                y: 10 + Math.round(Math.random() * 20),
277            })),
278            dataB: range(100).map(i => ({
279                x: time.timeMinute.offset(date, i * 30),
280                y: 30 + Math.round(Math.random() * 20),
281            })),
282            dataC: range(100).map(i => ({
283                x: time.timeMinute.offset(date, i * 30),
284                y: 60 + Math.round(Math.random() * 20),
285            })),
286        }
287
288        this.formatTime = timeFormat('%Y %b %d')
289    }
290
291    componentDidMount() {
292        this.timer = setInterval(this.next, 100)
293    }
294
295    componentWillUnmount() {
296        clearInterval(this.timer)
297    }
298
299    next = () => {
300        const dataA = this.state.dataA.slice(1)
301        dataA.push({
302            x: time.timeMinute.offset(last(dataA).x, 30),
303            y: 10 + Math.round(Math.random() * 20),
304        })
305        const dataB = this.state.dataB.slice(1)
306        dataB.push({
307            x: time.timeMinute.offset(last(dataB).x, 30),
308            y: 30 + Math.round(Math.random() * 20),
309        })
310        const dataC = this.state.dataC.slice(1)
311        dataC.push({
312            x: time.timeMinute.offset(last(dataC).x, 30),
313            y: 60 + Math.round(Math.random() * 20),
314        })
315
316        this.setState({ dataA, dataB, dataC })
317    }
318
319    render() {
320        const { dataA, dataB, dataC } = this.state
321
322        return (
323            <Line
324                {...commonProperties}
325                margin={{ top: 30, right: 50, bottom: 60, left: 50 }}
326                data={[
327                    { id: 'A', data: dataA },
328                    { id: 'B', data: dataB },
329                    { id: 'C', data: dataC },
330                ]}
331                xScale={{ type: 'time', format: 'native' }}
332                yScale={{ type: 'linear', max: 100 }}
333                axisTop={{
334                    format: '%H:%M',
335                    tickValues: 'every 4 hours',
336                }}
337                axisBottom={{
338                    format: '%H:%M',
339                    tickValues: 'every 4 hours',
340                    legend: `${this.formatTime(dataA[0].x)} ——— ${this.formatTime(last(dataA).x)}`,
341                    legendPosition: 'middle',
342                    legendOffset: 46,
343                }}
344                axisRight={{}}
345                enablePoints={false}
346                enableGridX={true}
347                curve="monotoneX"
348                animate={false}
349                motionStiffness={120}
350                motionDamping={50}
351                isInteractive={false}
352                enableSlices={false}
353                useMesh={true}
354                theme={{
355                    axis: { ticks: { text: { fontSize: 14 } } },
356                    grid: { line: { stroke: '#ddd', strokeDasharray: '1 2' } },
357                }}
358            />
359        )
360    }
361}
362
363stories.add('real time chart', () => <RealTimeChart />)
364
365const GrowingLine = () => {
366    const [points, setPoints] = useState([{ x: 0, y: 50 }])
367
368    useEffect(() => {
369        if (points.length === 101) return
370
371        setTimeout(() => {
372            setPoints(p => {
373                const prev = p[p.length - 1]
374
375                return [
376                    ...p,
377                    {
378                        x: prev.x + 1,
379                        y: Math.max(Math.min(prev.y + Math.random() * 10 - 5, 100), 0),
380                    },
381                ]
382            })
383        }, 300)
384    }, [points, setPoints])
385
386    return (
387        <Line
388            {...commonProperties}
389            yScale={{
390                type: 'linear',
391                min: 0,
392                max: 'auto',
393            }}
394            xScale={{
395                type: 'linear',
396                min: 0,
397                max: 'auto',
398            }}
399            data={[{ id: 'serie', data: points }]}
400            axisBottom={{
401                tickValues: 4,
402            }}
403            axisLeft={{
404                tickValues: 4,
405            }}
406            isInteractive={false}
407            animate={false}
408            enableArea={true}
409        />
410    )
411}
412
413stories.add('growing line', () => <GrowingLine />)
414
415stories.add('custom point symbol', () => (
416    <Line
417        {...commonProperties}
418        yScale={{
419            type: 'linear',
420            stacked: boolean('stacked', true),
421        }}
422        curve={select('curve', curveOptions, 'monotoneX')}
423        pointSymbol={CustomSymbol}
424        pointSize={16}
425        pointBorderWidth={1}
426        pointBorderColor={{
427            from: 'color',
428            modifiers: [['darker', 0.3]],
429        }}
430        axisLeft={{
431            tickSize: 10,
432        }}
433    />
434))
435
436stories.add('using data colors', () => (
437    <Line
438        {...commonProperties}
439        yScale={{
440            type: 'linear',
441            stacked: true,
442        }}
443        curve="linear"
444        colors={{ datum: 'color' }}
445        enablePointLabel={true}
446        pointSize={10}
447        pointBorderColor={{ theme: 'background' }}
448        pointBorderWidth={2}
449        enableSlices={false}
450        useMesh={true}
451    />
452))
453
454stories.add('adding markers', () => (
455    <Line
456        {...commonProperties}
457        yScale={{
458            type: 'linear',
459            stacked: boolean('stacked', true),
460        }}
461        curve={select('curve', curveOptions, 'catmullRom')}
462        markers={[
463            {
464                axis: 'y',
465                value: 100,
466                lineStyle: { stroke: '#b0413e', strokeWidth: 2 },
467                legend: 'y marker',
468                legendOrientation: 'vertical',
469            },
470            {
471                axis: 'x',
472                value: data[0].data[5].x,
473                lineStyle: { stroke: '#b0413e', strokeWidth: 2 },
474                legend: 'x marker',
475            },
476        ]}
477    />
478))
479
480stories.add(
481    'holes in data',
482    () => (
483        <Line
484            {...commonProperties}
485            data={[
486                {
487                    id: 'fake corp. A',
488                    data: [4, 8, 5, null, 2, 1, 4, null, 8, 9, 5].map((y, i) => ({
489                        x: `#${i}`,
490                        y,
491                    })),
492                },
493                {
494                    id: 'fake corp. B',
495                    data: [5, 9, 8, 6, 3, 1, 2, null, 5, 8, 4].map((y, i) => ({ x: `#${i}`, y })),
496                },
497            ]}
498            yScale={{
499                type: 'linear',
500                stacked: boolean('stacked', false),
501            }}
502            curve={select('curve', curveOptions, 'monotoneX')}
503            pointSize={8}
504            pointBorderColor="#fff"
505            pointBorderWidth={2}
506        />
507    ),
508    {
509        info: {
510            text: `You can skip portions of the lines by setting y value to \`null\`.`,
511        },
512    }
513)
514
515stories.add(
516    'different serie lengths',
517    () => (
518        <Line
519            {...commonProperties}
520            data={[
521                {
522                    id: 'fake corp. A',
523                    data: [
524                        { x: 0, y: 7 },
525                        { x: 1, y: 5 },
526                        { x: 2, y: 11 },
527                        { x: 3, y: 12 },
528                        { x: 4, y: 13 },
529                        { x: 5, y: null },
530                        { x: 6, y: 18 },
531                        { x: 7, y: 16 },
532                        { x: 8, y: 8 },
533                        { x: 9, y: 10 },
534                        { x: 10, y: 9 },
535                    ],
536                },
537                {
538                    id: 'fake corp. B',
539                    data: [
540                        { x: 3, y: 14 },
541                        { x: 4, y: 16 },
542                        { x: 5, y: 19 },
543                        { x: 6, y: 20 },
544                        { x: 7, y: 18 },
545                    ],
546                },
547            ]}
548            xScale={{
549                type: 'linear',
550                min: 0,
551                max: 'auto',
552            }}
553            yScale={{
554                type: 'linear',
555                stacked: boolean('stacked', false),
556            }}
557            curve="monotoneX"
558        />
559    ),
560    {
561        info: {
562            text: `
563                Please note that when using stacked y scale with variable length/data holes,
564                if one of the y value is \`null\` all subsequent values will be skipped
565                as we cannot properly compute the sum.
566            `,
567        },
568    }
569)
570
571stories.add('custom min/max y', () => (
572    <Line
573        {...commonProperties}
574        markers={[
575            {
576                axis: 'y',
577                value: 0,
578                lineStyle: { stroke: '#b0413e', strokeWidth: 1 },
579                legend: 'y marker at 0',
580                legendPosition: 'bottom-left',
581            },
582        ]}
583        data={[
584            {
585                id: 'fake corp. A',
586                data: [
587                    0.5, 0.6, 0.8, 0.7, 0.8, 0.5, 0.2, 0.3, 0.4, 0.5, 0.5, 0.1, -0.2, -0.6, -0.1, 0,
588                    0.1, -0.1, -0.4, -0.6, -0.5, 0.2, 0.5, 0.6, 0.6,
589                ].map((y, i) => ({ x: `#${i}`, y })),
590            },
591            {
592                id: 'fake corp. B',
593                data: [
594                    0.9, 0.5, 0.6, 0.5, 0.4, 0.3, -0.1, -0.5, -0.4, -0.4, -0.1, -0.3, -0.2, 0.1,
595                    0.1, 0.3, 0.4, 0.5, 0.4, 0.6, 0.5, 0.7, 0.8, 0.4, 0.3,
596                ].map((y, i) => ({ x: `#${i}`, y })),
597            },
598        ]}
599        curve={select('curve', curveOptions, 'monotoneX')}
600        pointSize={8}
601        pointBorderColor="#fff"
602        pointBorderWidth={2}
603        yScale={{
604            type: 'linear',
605            stacked: boolean('stacked', false),
606            min: -1,
607            max: 1,
608        }}
609    />
610))
611
612stories.add('non linear values', () => (
613    <Line
614        {...commonProperties}
615        xScale={{
616            type: 'linear',
617            min: 0,
618            max: 12,
619        }}
620        yScale={{
621            type: 'linear',
622            min: 0,
623            max: 11,
624        }}
625        colors="black"
626        curve="linear"
627        animate={false}
628        lineWidth={4}
629        pointSize={8}
630        pointColor="white"
631        pointBorderColor={{ from: 'serieColor' }}
632        pointBorderWidth={2}
633        enableSlices={false}
634        useMesh={true}
635        debugMesh={true}
636        data={[
637            {
638                id: 'nivo',
639                data: [
640                    { x: 1, y: 1 },
641                    { x: 1, y: 10 },
642                    { x: 2.25, y: 10 },
643                    { x: 3, y: 4 },
644                    { x: 3, y: 10 },
645                    { x: 4, y: 10 },
646                    { x: 4, y: 1 },
647                    { x: 2.75, y: 1 },
648                    { x: 2, y: 7 },
649                    { x: 2, y: 1 },
650                    { x: 1, y: 1 },
651                    { x: null, y: null },
652                    { x: 4.5, y: 1 },
653                    { x: 5.5, y: 1 },
654                    { x: 5.5, y: 10 },
655                    { x: 4.5, y: 10 },
656                    { x: 4.5, y: 1 },
657                    { x: null, y: null },
658                    { x: 6.5, y: 1 },
659                    { x: 7.5, y: 1 },
660                    { x: 8.5, y: 10 },
661                    { x: 7.5, y: 10 },
662                    { x: 7, y: 4 },
663                    { x: 6.5, y: 10 },
664                    { x: 5.5, y: 10 },
665                    { x: 6.5, y: 1 },
666                    { x: null, y: null },
667                    { x: 9.5, y: 1 },
668                    { x: 10.5, y: 1 },
669                    { x: 11.5, y: 3 },
670                    { x: 11.5, y: 8 },
671                    { x: 10.5, y: 10 },
672                    { x: 9.5, y: 10 },
673                    { x: 8.5, y: 8 },
674                    { x: 8.5, y: 3 },
675                    { x: 9.5, y: 1 },
676                    { x: null, y: null },
677                    { x: 9.5, y: 4 },
678                    { x: 10.5, y: 4 },
679                    { x: 10.5, y: 7 },
680                    { x: 9.5, y: 7 },
681                    { x: 9.5, y: 4 },
682                ],
683            },
684        ]}
685    />
686))
687
688stories.add(
689    'highlighting negative values',
690    () => (
691        <Line
692            {...commonProperties}
693            data={[
694                {
695                    id: 'positive :)',
696                    data: [
697                        { x: 0, y: 0.7 },
698                        { x: 1, y: 0.9 },
699                        { x: 2, y: 0.8 },
700                        { x: 3, y: 0.6 },
701                        { x: 4, y: 0.3 },
702                        { x: 5, y: 0 },
703                        { x: 6, y: null },
704                        { x: 7, y: null },
705                        { x: 8, y: null },
706                        { x: 9, y: null },
707                        { x: 10, y: null },
708                        { x: 11, y: 0 },
709                        { x: 12, y: 0.4 },
710                        { x: 13, y: 0.6 },
711                        { x: 14, y: 0.5 },
712                        { x: 15, y: 0.3 },
713                        { x: 16, y: 0.4 },
714                        { x: 17, y: 0 },
715                    ],
716                },
717                {
718                    id: 'negative :(',
719                    data: [
720                        { x: 5, y: 0 },
721                        { x: 6, y: -0.3 },
722                        { x: 7, y: -0.5 },
723                        { x: 8, y: -0.9 },
724                        { x: 9, y: -0.2 },
725                        { x: 10, y: -0.4 },
726                        { x: 11, y: 0 },
727                        { x: 12, y: null },
728                        { x: 13, y: null },
729                        { x: 14, y: null },
730                        { x: 15, y: null },
731                        { x: 16, y: null },
732                        { x: 17, y: 0 },
733                        { x: 18, y: -0.4 },
734                        { x: 19, y: -0.2 },
735                        { x: 20, y: -0.1 },
736                        { x: 21, y: -0.6 },
737                    ],
738                },
739            ]}
740            curve={select('curve', curveOptions, 'monotoneX')}
741            enablePointLabel={true}
742            pointSymbol={CustomSymbol}
743            pointSize={14}
744            pointBorderWidth={1}
745            pointBorderColor={{
746                from: 'color',
747                modifiers: [['darker', 0.3]],
748            }}
749            pointLabelYOffset={-20}
750            enableGridX={false}
751            colors={['rgb(97, 205, 187)', 'rgb(244, 117, 96)']}
752            xScale={{
753                type: 'linear',
754            }}
755            yScale={{
756                type: 'linear',
757                stacked: false,
758                min: -1,
759                max: 1,
760            }}
761            enableArea={true}
762            areaOpacity={0.07}
763            enableSlices={false}
764            useMesh={true}
765            crosshairType="cross"
766        />
767    ),
768    {
769        info: {
770            text: `
771                You can have two different line styles for a line if you split it into
772                two data set, one containing positive values and negative values filled with \`null\`
773                and the other having only negative values and positive ones replaced by \`null\`.
774            `,
775        },
776    }
777)
778
779stories.add('formatting axis values', () => (
780    <Line
781        {...commonProperties}
782        curve="monotoneX"
783        yScale={{
784            type: 'linear',
785            stacked: boolean('stacked', true),
786        }}
787        axisLeft={{
788            format: value =>
789                `${Number(value).toLocaleString('ru-RU', {
790                    minimumFractionDigits: 2,
791                })} ₽`,
792        }}
793    />
794))
795
796stories.add('formatting values', () => (
797    <Line
798        {...commonProperties}
799        curve="monotoneX"
800        yScale={{
801            type: 'linear',
802            stacked: boolean('stacked', true),
803        }}
804        yFormat={value =>
805            `${Number(value).toLocaleString('ru-RU', {
806                minimumFractionDigits: 2,
807            })} ₽`
808        }
809    />
810))
811
812stories.add('custom tooltip', () => (
813    <Line
814        {...commonProperties}
815        enableSlices="x"
816        curve={select('curve', curveOptions, 'linear')}
817        yScale={{
818            type: 'linear',
819            stacked: boolean('stacked', true),
820        }}
821        sliceTooltip={({ slice }) => {
822            return (
823                <div
824                    style={{
825                        background: 'white',
826                        padding: '9px 12px',
827                        border: '1px solid #ccc',
828                    }}
829                >
830                    <div>x: {slice.id}</div>
831                    {slice.points.map(point => (
832                        <div
833                            key={point.id}
834                            style={{
835                                color: point.serieColor,
836                                padding: '3px 0',
837                            }}
838                        >
839                            <strong>{point.serieId}</strong> [{point.data.yFormatted}]
840                        </div>
841                    ))}
842                </div>
843            )
844        }}
845    />
846))
847
848const AreaLayer = ({ series, xScale, yScale, innerHeight }) => {
849    const areaGenerator = area()
850        .x(d => xScale(d.data.x))
851        .y0(d => Math.min(innerHeight, yScale(d.data.y - 40)))
852        .y1(d => yScale(d.data.y + 10))
853        .curve(curveMonotoneX)
854
855    return (
856        <>
857            <Defs
858                defs={[
859                    {
860                        id: 'pattern',
861                        type: 'patternLines',
862                        background: 'transparent',
863                        color: '#3daff7',
864                        lineWidth: 1,
865                        spacing: 6,
866                        rotation: -45,
867                    },
868                ]}
869            />
870            <path
871                d={areaGenerator(series[0].data)}
872                fill="url(#pattern)"
873                fillOpacity={0.6}
874                stroke="#3daff7"
875                strokeWidth={2}
876            />
877        </>
878    )
879}
880
881stories.add(
882    'custom layers',
883    () => (
884        <Line
885            {...commonProperties}
886            yScale={{
887                type: 'linear',
888                stacked: true,
889            }}
890            data={commonProperties.data.filter(d => ['rhum', 'whisky'].includes(d.id))}
891            lineWidth={3}
892            curve="linear"
893            colors={['#028ee6', '#774dd7']}
894            enableGridX={false}
895            pointSize={12}
896            pointColor="white"
897            pointBorderWidth={2}
898            pointBorderColor={{ from: 'serieColor' }}
899            layers={[
900                'grid',
901                'markers',
902                'areas',
903                AreaLayer,
904                'lines',
905                'slices',
906                'axes',
907                'points',
908                'legends',
909            ]}
910            theme={{
911                crosshair: {
912                    line: {
913                        strokeWidth: 2,
914                        stroke: '#774dd7',
915                        strokeOpacity: 1,
916                    },
917                },
918            }}
919        />
920    ),
921    {
922        info: {
923            text: `
924                You can use the layers property to add extra layers
925                to the line chart.
926            `,
927        },
928    }
929)
930
931const styleById = {
932    cognac: {
933        strokeDasharray: '12, 6',
934        strokeWidth: 2,
935    },
936    vodka: {
937        strokeDasharray: '1, 16',
938        strokeWidth: 8,
939        strokeLinejoin: 'round',
940        strokeLinecap: 'round',
941    },
942    rhum: {
943        strokeDasharray: '6, 6',
944        strokeWidth: 4,
945    },
946    default: {
947        strokeWidth: 1,
948    },
949}
950
951const DashedLine = ({ series, lineGenerator, xScale, yScale }) => {
952    return series.map(({ id, data, color }) => (
953        <path
954            key={id}
955            d={lineGenerator(
956                data.map(d => ({
957                    x: xScale(d.data.x),
958                    y: yScale(d.data.y),
959                }))
960            )}
961            fill="none"
962            stroke={color}
963            style={styleById[id] || styleById.default}
964        />
965    ))
966}
967
968stories.add(
969    'custom line style',
970    () => (
971        <Line
972            {...commonProperties}
973            xScale={{
974                type: 'point',
975                min: 'auto',
976                max: 'auto',
977            }}
978            yScale={{
979                type: 'linear',
980                min: 'auto',
981                max: 'auto',
982            }}
983            axisBottom={{
984                orient: 'bottom',
985                tickSize: 5,
986                tickPadding: 5,
987                tickRotation: 0,
988            }}
989            axisLeft={{
990                orient: 'left',
991                tickSize: 5,
992                tickPadding: 5,
993                tickRotation: 0,
994            }}
995            layers={['grid', 'markers', 'areas', DashedLine, 'slices', 'points', 'axes', 'legends']}
996        />
997    ),
998    {
999        info: {
1000            text: `You can customize line styles using the 'layers' property and implement your own line rendering.`,
1001        },
1002    }
1003)
1004
1005stories.add('area gradients', () => (
1006    <Line
1007        {...commonProperties}
1008        enableArea={true}
1009        yScale={{
1010            type: 'linear',
1011            stacked: true,
1012        }}
1013        curve={select('curve', curveOptions, 'linear')}
1014        defs={[
1015            linearGradientDef('gradientA', [
1016                { offset: 0, color: 'inherit' },
1017                { offset: 100, color: 'inherit', opacity: 0 },
1018            ]),
1019        ]}
1020        fill={[{ match: '*', id: 'gradientA' }]}
1021    />
1022))