import{r as m,f as l,j as t}from"./iframe-Cq1efVtu.js";import{S as d}from"./SearchField-ESSKajpL.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DHSYBYAA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDUIlyKR.js";import"./clsx-B-dksMZM.js";import"./Form-Q13wlzI6.js";import"./useFocusRing-TSe7POO2.js";import"./index-ByIJ9DK_.js";import"./index-CycVNjP9.js";import"./Input-HFnoYBJM.js";import"./Hidden-DNnAB0GJ.js";import"./Button-DksBmTbZ.js";import"./useLabel-ls64yvEj.js";import"./useLabels-DUkn1Zma.js";import"./useButton-CT6xb_5T.js";import"./FieldError-C6eAPC3q.js";import"./Text-DK-NnzUH.js";import"./clsx-Ciqy0D92.js";import"./Text-RuRZ3ncY.js";import"./RSPContexts-Dkmb-asV.js";import"./Group-C4PVmIVz.js";import"./useControlledState-C2EcW_bk.js";import"./useLocalizedStringFormatter-UDvCuBP6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D1hoIgxt.js";import"./useField-IIOsVOPa.js";import"./TextField.module-DdivwlC8.js";import"./search-xgh0k7y3.js";import"./createLucideIcon-CUu-1dyR.js";import"./x--VzijxeQ.js";import"./useLocalizedStringFormatter-CJpwWgd_.js";import"./Button-CTOoH2N3.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DbkwGiLN.js";import"./Collection-BxhYCovK.js";import"./index-Drb_jYn1.js";import"./DragAndDrop-Hs1gszG0.js";import"./getScrollParent-5COwKf8k.js";import"./scrollIntoView-CUwLIsqS.js";import"./SelectionIndicator-CgZV3gGJ.js";import"./SelectionManager-Cd7Mn8EA.js";import"./useEvent-Bq3pP39a.js";import"./useDescription-xyqlmyLv.js";import"./inertValue-DwfnOWqR.js";import"./useHighlightSelectionDescription-BBpUvlaM.js";import"./useUpdateEffect-DVeAqXtk.js";import"./ListKeyboardDelegate-CD1hJbSr.js";import"./useHasTabbableChild-BaxkR2Gf.js";import"./Checkbox-BXRkMEg0.js";import"./check-DDYMmT_Z.js";import"./useToggleState--OPvF_q7.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
