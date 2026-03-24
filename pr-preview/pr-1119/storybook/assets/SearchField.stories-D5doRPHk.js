import{r as m,f as l,j as t}from"./iframe-CPefQOMB.js";import{S as d}from"./SearchField-sks0M6Ya.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DjNMSeJI.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DEaTr3Fo.js";import"./clsx-B-dksMZM.js";import"./Form-CpmcMTFY.js";import"./useFocusRing-C-wxtkDE.js";import"./index-DzMaIh1E.js";import"./index-iwjKZAtl.js";import"./Input-DmkKW2MK.js";import"./Hidden-CMfLv80K.js";import"./Button-CZP9j9FA.js";import"./useLabels-CyIDVwdt.js";import"./useButton-h3Du59Bt.js";import"./FieldError-HmUKiVb0.js";import"./Text-DYVOn2Uj.js";import"./clsx-Ciqy0D92.js";import"./Text-CxFNT2uR.js";import"./RSPContexts-BAtoVYGO.js";import"./Group-D1X3vN9H.js";import"./useControlledState-D3MUrnpH.js";import"./useLocalizedStringFormatter-2aSusuIC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BWVMWcat.js";import"./useField-BdgyFtJ7.js";import"./TextField.module-DdivwlC8.js";import"./search-CnMus8QO.js";import"./createLucideIcon-CMS1EKmC.js";import"./x-BnYSOvfM.js";import"./useLocalizedStringFormatter-D3LPWJw0.js";import"./Button-BiVXJ2cY.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-En7Y8aD0.js";import"./Collection-DDNjRncz.js";import"./index-CF4t0_Q1.js";import"./DragAndDrop-B5t755mb.js";import"./getScrollParent-Dax8D36d.js";import"./scrollIntoView-SfcehlMa.js";import"./SelectionIndicator-Bo5GGMOT.js";import"./SelectionManager-D2GrdEi7.js";import"./useEvent-DReQVrX4.js";import"./useDescription-Cd_q-cvg.js";import"./inertValue-B8EyHcfk.js";import"./useHighlightSelectionDescription-bnhMIv_W.js";import"./useUpdateEffect-uG-Bb7aW.js";import"./ListKeyboardDelegate-B7f2bhga.js";import"./useHasTabbableChild-CBgf9dX_.js";import"./Checkbox-Cz18Su8p.js";import"./check-CDWB4bmg.js";import"./useToggleState-DujT4ywD.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
