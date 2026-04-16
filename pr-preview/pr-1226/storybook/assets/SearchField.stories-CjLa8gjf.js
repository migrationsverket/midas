import{r as m,f as l,j as t}from"./iframe-DLmeXnKv.js";import{S as d}from"./SearchField-4cVQ6r2t.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BSDr1AWz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ClLZ4yi-.js";import"./clsx-B-dksMZM.js";import"./Form-D9z8hvZj.js";import"./useFocusRing-Chec2SQM.js";import"./index-CXmu4Dre.js";import"./index-Bf1sSXM2.js";import"./Input-CcIXyW6y.js";import"./Hidden-DYR-bjkD.js";import"./Button-6oEuMc47.js";import"./useLabel-DFg61T6F.js";import"./useLabels-CdIpmnty.js";import"./useButton-2j0Kbf_l.js";import"./FieldError-BpDzH8Cd.js";import"./Text-as2Y-4wz.js";import"./clsx-Ciqy0D92.js";import"./Text-ByAHNZXR.js";import"./RSPContexts-DA-h5R_C.js";import"./Group-CuXfT3dh.js";import"./useControlledState-B3HwZ_qH.js";import"./useLocalizedStringFormatter-CjQq4jGT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BEsTiIX_.js";import"./useField-C-J_0N0F.js";import"./TextField.module-DdivwlC8.js";import"./search-DRveudN0.js";import"./createLucideIcon-Cb9jSIDP.js";import"./x-WR_Pezhl.js";import"./useLocalizedStringFormatter-CtddYHoj.js";import"./Button-CmoC0nDS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BCbNtM-G.js";import"./Collection-BN6mLPtZ.js";import"./index-D4QiN2go.js";import"./DragAndDrop-C1psWB3e.js";import"./getScrollParent-B00tpoYc.js";import"./scrollIntoView-DOnnrSvN.js";import"./SelectionIndicator-Cy4dV5Da.js";import"./SelectionManager-DWkTWies.js";import"./useEvent-D3OHHv5s.js";import"./useDescription-B42TuL4b.js";import"./inertValue-CcYRD9f0.js";import"./useHighlightSelectionDescription-Ct1aF90k.js";import"./useUpdateEffect-sqLJIs5-.js";import"./ListKeyboardDelegate-Cr-a3LsS.js";import"./useHasTabbableChild-BNJkWc11.js";import"./Checkbox-auFTacn6.js";import"./check-DObRk8di.js";import"./useToggleState-_uJP0eQT.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
