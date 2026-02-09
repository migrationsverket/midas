import{r as m,f as l,j as t}from"./iframe-CDlGoVBX.js";import{S as d}from"./SearchField-Be8m6-K4.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Du6C4xZp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CcD6TCI7.js";import"./utils-DK0QJ5bq.js";import"./useLocalizedStringFormatter-FToakcQL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DnEnbiaG.js";import"./useFocusRing-GV8a7-dB.js";import"./index-CClkoolm.js";import"./index-D9EgTrn3.js";import"./useFormValidation-C3JGr8K4.js";import"./useField-C4i4gm-f.js";import"./Button-ChHi1CmX.js";import"./Hidden-D3g4_ydn.js";import"./useLabels-Bnvu_zoZ.js";import"./useButton-CEiQ-7P6.js";import"./search-B9iDeHJT.js";import"./createLucideIcon-DnI-ftFI.js";import"./ClearButton-HRsWTaKZ.js";import"./Button-bhz0d5b_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D9wBWCji.js";import"./VisuallyHidden-BoTcuaXb.js";import"./x-DzdEbKW-.js";import"./FieldError-BTnAzmQ0.js";import"./Text-gvo1OKGS.js";import"./Text-Cflgqxbo.js";import"./RSPContexts-omBJ6Sgu.js";import"./Collection-C0k2ascB.js";import"./index-D25xMYNc.js";import"./DragAndDrop-Bqq4C-0h.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B2Q5v_NP.js";import"./SelectionManager-Dgm03e0j.js";import"./useEvent-BCnLZYbk.js";import"./useDescription-DUfOP2Oy.js";import"./inertValue-RbHAcf9r.js";import"./useHighlightSelectionDescription-Dh4o4wZo.js";import"./useUpdateEffect-C8Jrz0MP.js";import"./ListKeyboardDelegate-Cd18ptaN.js";import"./useHasTabbableChild-CngMwZqY.js";import"./Checkbox-Cgaybv88.js";import"./Form-DTFKHJWV.js";import"./check-D5ZdhC_y.js";import"./useToggleState-C4Fu6x2J.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
