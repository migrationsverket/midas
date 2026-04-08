import{r as m,f as l,j as t}from"./iframe-IoRZPpzT.js";import{S as d}from"./SearchField-DwQj3hcr.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B179IHoJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BxE4vEtI.js";import"./clsx-B-dksMZM.js";import"./Form-an_t5IvV.js";import"./useFocusRing-Cfj0kgNA.js";import"./index-C3u5Wnjv.js";import"./index-CWXAEqH-.js";import"./Input-BrOSOBAi.js";import"./Hidden-wW-xxMhm.js";import"./Button-CVTJNyWz.js";import"./useLabel-Cv3-1VeN.js";import"./useLabels-0sv1QR26.js";import"./useButton-BSTxFbL2.js";import"./FieldError-BWVbvEBE.js";import"./Text-Bm8kOdo3.js";import"./clsx-Ciqy0D92.js";import"./Text-fDJLlYrf.js";import"./RSPContexts-BGd6R71q.js";import"./Group-013S7T0p.js";import"./useControlledState-BGABXmqM.js";import"./useLocalizedStringFormatter-Dl-vCCz5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-AuN8sM1I.js";import"./useField-Vudx1VTG.js";import"./TextField.module-DdivwlC8.js";import"./search-DkL5zT34.js";import"./createLucideIcon-D_o_RWfS.js";import"./x-BKVjaePe.js";import"./useLocalizedStringFormatter-DWwCwLPP.js";import"./Button-fE-_CYhO.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DVgF-hYp.js";import"./Collection-PjH1GUxA.js";import"./index-BlQyREr_.js";import"./DragAndDrop-CLiPusXh.js";import"./getScrollParent-DwAHZWkX.js";import"./scrollIntoView-36gHvCrJ.js";import"./SelectionIndicator-D9ob4S69.js";import"./SelectionManager-BZO6tDgr.js";import"./useEvent-B1wVgNEN.js";import"./useDescription-BxymuZdi.js";import"./inertValue-BoE68iq5.js";import"./useHighlightSelectionDescription-rZiisYus.js";import"./useUpdateEffect-D9mpqC05.js";import"./ListKeyboardDelegate-F-0GlIkm.js";import"./useHasTabbableChild-DL-XasT4.js";import"./Checkbox-D9E3JSMw.js";import"./check-NQHBINng.js";import"./useToggleState-dQRid1G7.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
