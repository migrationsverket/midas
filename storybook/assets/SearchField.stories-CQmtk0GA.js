import{r as m,f as l,j as t}from"./iframe-CFaxLqEa.js";import{S as d}from"./SearchField-CDM0G4eF.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-IgdY_SOA.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-lnm2btlX.js";import"./utils-BgY9U9Qr.js";import"./useLocalizedStringFormatter-BhBXUazm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C5Tm--r5.js";import"./useFocusRing-B3QBGcNF.js";import"./index-GxleSbEr.js";import"./index-g5CyflDh.js";import"./useFormValidation-CNrnZzUV.js";import"./useField-Da0jDZEi.js";import"./Button-CRZFTWuY.js";import"./Hidden-Cw9STqj5.js";import"./useLabels-ClJSaiIH.js";import"./useButton-DZkgje5C.js";import"./search-Brw8WLSQ.js";import"./createLucideIcon-0-aYMEMi.js";import"./ClearButton-CgSTzYoj.js";import"./Button-NFqaYpQd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-LFhdxWG_.js";import"./VisuallyHidden-BYWYy-1_.js";import"./x-DVurtZys.js";import"./FieldError-CWVv_ne6.js";import"./Text-LU79jMy_.js";import"./Text-B0xzN78n.js";import"./RSPContexts-CKwAPfOb.js";import"./Collection-Dg55PgvO.js";import"./index-Dtj87kt5.js";import"./DragAndDrop-9acEh-_r.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cbzi_KBz.js";import"./SelectionManager-Bk1PTlDQ.js";import"./useEvent-Cb-Pr1Jl.js";import"./useDescription-BMyeVBGj.js";import"./inertValue-CledTBM5.js";import"./useHighlightSelectionDescription-DWwHTB_a.js";import"./useUpdateEffect-xJ6D_ON2.js";import"./ListKeyboardDelegate-Cz9dpHB8.js";import"./useHasTabbableChild-Dv3hG0Dw.js";import"./Checkbox-kJfxr9cP.js";import"./Form-3RCJ_QBt.js";import"./check-Db2cS1fr.js";import"./useToggleState-C0SfuOTE.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
