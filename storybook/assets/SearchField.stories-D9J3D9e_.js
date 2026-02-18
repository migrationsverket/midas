import{r as m,f as l,j as t}from"./iframe-CZDKaAth.js";import{S as d}from"./SearchField-Cgzv_rPA.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-COA-_-lZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B_tnY1CD.js";import"./utils-DN3LZENe.js";import"./useLocalizedStringFormatter-BoxRGhBr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-U0OvxAMK.js";import"./useFocusRing-DFIYpxaz.js";import"./index-Cb3fQwD_.js";import"./index-774Qpy2F.js";import"./useFormValidation-BebHdBmO.js";import"./useField-j2JfYJDQ.js";import"./Button-BJEoY7LO.js";import"./Hidden-CKAoQIbG.js";import"./useLabels-mgzC46gL.js";import"./useButton-BCDoEqm_.js";import"./search-B6CPv3vd.js";import"./createLucideIcon-BpgRNcfO.js";import"./ClearButton-CbGO_4Sc.js";import"./Button-BK8SLlQI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DDe0URuf.js";import"./VisuallyHidden-CoNqG1me.js";import"./x-BUanT53w.js";import"./FieldError-BRB2QFta.js";import"./Text-DZbmG9za.js";import"./Text-DWwhJwcg.js";import"./RSPContexts-CK3pP4Eo.js";import"./Collection-BqVT-BRX.js";import"./index-B1y-_C0G.js";import"./DragAndDrop-Boy_kBPO.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D91dUD_L.js";import"./SelectionManager-C43GYvIG.js";import"./useEvent-BfXh6nP0.js";import"./useDescription-O6FD6N3s.js";import"./inertValue-DRFLQbWT.js";import"./useHighlightSelectionDescription-DYtiBpSv.js";import"./useUpdateEffect-BDMHxce3.js";import"./ListKeyboardDelegate-Bn_PIGBR.js";import"./useHasTabbableChild-BDL9daDU.js";import"./Checkbox-DoP9Fm1y.js";import"./Form-BeBE0Ma0.js";import"./check-DaSN-CEh.js";import"./useToggleState-su1KeJoo.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
