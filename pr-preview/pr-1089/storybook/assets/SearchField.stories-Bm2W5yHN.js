import{r as m,f as l,j as t}from"./iframe-CXiR3iKp.js";import{S as d}from"./SearchField-CG9l6Mvr.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DN3NUJHL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D8SfxPND.js";import"./utils-Bp_8F4M1.js";import"./useLocalizedStringFormatter-oYkQuV-6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CLj7IyXn.js";import"./useFocusRing-DoagLvTG.js";import"./index-BVvfbKRI.js";import"./index-DLJWMq1n.js";import"./useFormValidation-1zZirEp8.js";import"./useField-DlTgCsXO.js";import"./Button-DQDqzjOI.js";import"./Hidden-l5OStL3l.js";import"./useLabels-hiXhHu80.js";import"./useButton-DoaLh7Qx.js";import"./search-Dcz9G_ow.js";import"./createLucideIcon-D8BZH6VC.js";import"./ClearButton-CU3j3rcc.js";import"./Button-6_2D52en.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-0YZmeDYQ.js";import"./VisuallyHidden-QuqGTMLw.js";import"./x-B58mgY9H.js";import"./FieldError-DhN8Qwjc.js";import"./Text-VVcfFgTz.js";import"./Text-DQ2_N-F1.js";import"./RSPContexts-BzUEWbO_.js";import"./Collection-DOgSX1Rr.js";import"./index-BnfzSOVc.js";import"./DragAndDrop-C_P2nBMo.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTH59uWk.js";import"./SelectionManager-Cg-LEXRR.js";import"./useEvent-CYUKjQ_Y.js";import"./useDescription-CwhQFL3q.js";import"./inertValue-CnRoh7Hr.js";import"./useHighlightSelectionDescription-CKi9zI1O.js";import"./useUpdateEffect-DEC8FpN1.js";import"./ListKeyboardDelegate-xGHUZWyo.js";import"./useHasTabbableChild-DpreqHai.js";import"./Checkbox-BX63tR06.js";import"./Form-DKaWK_r_.js";import"./check-DLQ3AuH2.js";import"./useToggleState-ZTrJpODp.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
