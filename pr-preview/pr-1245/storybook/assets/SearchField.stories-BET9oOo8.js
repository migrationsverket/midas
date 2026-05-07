import{r as m,f as l,j as t}from"./iframe-B3CWHhIN.js";import{S as d}from"./SearchField-DhQB6cvm.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dkg7ygb1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Jns7c9tB.js";import"./clsx-B-dksMZM.js";import"./Form-DZNqsYbE.js";import"./useFocusRing-Dqy31Yu8.js";import"./index-BnJ3Y3M7.js";import"./index-CJ7rKWZW.js";import"./Input-DaIvaMm_.js";import"./Hidden-CgV_CbEL.js";import"./Button-BI1n4R5H.js";import"./useLabel-CC7uv02C.js";import"./useLabels-DG2yLXCg.js";import"./useButton-qyJkLJr0.js";import"./FieldError-DaCLZlSC.js";import"./Text-CjXkmRxL.js";import"./clsx-Ciqy0D92.js";import"./Text-BEt0Rg_V.js";import"./RSPContexts-D5wE8Zis.js";import"./Group-DdYmsXJ0.js";import"./useControlledState-DO7MzpyM.js";import"./useLocalizedStringFormatter-CcWFJj2d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BN_lArB3.js";import"./useField-Dhf-tbRQ.js";import"./TextField.module-DdivwlC8.js";import"./search-DmBCQuHY.js";import"./createLucideIcon-B55uVL59.js";import"./x-BAAJthI0.js";import"./useLocalizedStringFormatter-FGEoJAjv.js";import"./Button-CFIqCifj.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DPG3Zp-i.js";import"./Collection-DltRMGuJ.js";import"./index-DfG7SzIC.js";import"./DragAndDrop-B8EfWjOL.js";import"./getScrollParent-k-5r8MVO.js";import"./scrollIntoView-CEOdDLMX.js";import"./SelectionIndicator-CJ3Bq9Rm.js";import"./SelectionManager-BsMJ6UOF.js";import"./useEvent-Dz0-ORXf.js";import"./useDescription-BXbEU8r2.js";import"./inertValue-DxdCAkDz.js";import"./useHighlightSelectionDescription-Bmbyfy5T.js";import"./useUpdateEffect-CjW3TO62.js";import"./ListKeyboardDelegate-Ddz2Dxjm.js";import"./useHasTabbableChild-DlcsEq8p.js";import"./Checkbox-4K6Eyn4b.js";import"./check-BG3r-55S.js";import"./useToggleState-BrCQNV94.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
