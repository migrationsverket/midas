import{r as m,f as l,j as t}from"./iframe-BUDtIrHl.js";import{S as d}from"./SearchField-CP2nnqKI.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-oOOw5BOS.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D9bcyMir.js";import"./utils-AGwlrZ_4.js";import"./useLocalizedStringFormatter-BWOiSsrR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DqIFWit1.js";import"./useFocusRing-CjCkUQdP.js";import"./index-DONLKseB.js";import"./index-CGdvhCdV.js";import"./useFormValidation-BQSdPv_b.js";import"./useField-CcXXxyKb.js";import"./Button-IDkkm_2W.js";import"./Hidden-BlaUoiVl.js";import"./useLabels-B8ED9S2U.js";import"./useButton-Dcc_HHbb.js";import"./search-BYw4fXcd.js";import"./createLucideIcon-BWsYPG1T.js";import"./ClearButton-CKt9FJY8.js";import"./Button-DLSCCVY_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B9NIs4hG.js";import"./VisuallyHidden-Dvn9bM_l.js";import"./x-CJxbdHUR.js";import"./FieldError-B6xJ2_09.js";import"./Text-CbEfxdsU.js";import"./Text-Bdd1tqPS.js";import"./RSPContexts-Cdws8AZx.js";import"./Collection-BboK_RTQ.js";import"./index-CnFeaVjs.js";import"./DragAndDrop-DdcrpzIl.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BmWfpYdB.js";import"./SelectionManager-uiFozjTp.js";import"./useEvent-BeMeyqUJ.js";import"./useDescription-C-xHEeiw.js";import"./inertValue-DsePY8ye.js";import"./useHighlightSelectionDescription-CvSpTy2n.js";import"./useUpdateEffect-5mv_ydJw.js";import"./ListKeyboardDelegate-CKEXMxD7.js";import"./useHasTabbableChild-CRHnfK-h.js";import"./Checkbox-BuwT8nC3.js";import"./Form-DAq52jw6.js";import"./check-ChcTEj4m.js";import"./useToggleState-CR6cmAet.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
