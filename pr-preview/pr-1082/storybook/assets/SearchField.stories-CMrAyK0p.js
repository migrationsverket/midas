import{r as m,f as l,j as t}from"./iframe-DF-gckEl.js";import{S as d}from"./SearchField-DKVc-RSl.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-ZHYCdXuW.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BozieDQw.js";import"./utils-xE_2EOTS.js";import"./useLocalizedStringFormatter-B49X21jk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-SU1WDSst.js";import"./useFocusRing-DVmaifLp.js";import"./index-BB1CKHGL.js";import"./index-B-8oVGre.js";import"./useFormValidation-kF6lMwdG.js";import"./useField-BJ4J1Su9.js";import"./Button-DfFeWMER.js";import"./Hidden-CnADKIpW.js";import"./useLabels-DYYbGYck.js";import"./useButton-D5_aypw0.js";import"./search-Bu9pXn74.js";import"./createLucideIcon-DlP1PWjK.js";import"./ClearButton-CnaDqahQ.js";import"./Button-xgruqnpI.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-CPX24HR9.js";import"./VisuallyHidden-WVzpTwv1.js";import"./x-D5acHrs_.js";import"./FieldError-nZ-6NevE.js";import"./Text-CD93M0aA.js";import"./Text-mrdWRvrC.js";import"./RSPContexts-CRcRJYcx.js";import"./Collection-B0md0RaS.js";import"./index-CQSyT-Ss.js";import"./DragAndDrop-C8gAXsQj.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C2_foj_8.js";import"./SelectionManager--p2EeLu6.js";import"./useEvent-BG4kCyp-.js";import"./useDescription-BrazaQD9.js";import"./inertValue-EuVKRYfC.js";import"./useHighlightSelectionDescription-D3e6pZbI.js";import"./useUpdateEffect-DqzKfJJj.js";import"./ListKeyboardDelegate-CBJAAlnU.js";import"./useHasTabbableChild-DSYo0xp6.js";import"./Checkbox-DC-nANEX.js";import"./Form-CzwbKObq.js";import"./check-DAnsi3Zu.js";import"./useToggleState-BsjLAOmR.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
