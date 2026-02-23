import{r as m,f as l,j as t}from"./iframe-xAfmlG07.js";import{S as d}from"./SearchField-zyauAhu6.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-VqRDRorN.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-B0rcsDrm.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B8262pyO.js";import"./utils-9cghZAOb.js";import"./useLocalizedStringFormatter-C4Ie4IXR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cmkxs48S.js";import"./useFocusRing-DuURs6wG.js";import"./index-Cr2BzmUh.js";import"./index-DtXyM2b7.js";import"./useFormValidation-Dc5CfAEv.js";import"./useField-D592B_sa.js";import"./Button-_CPn_6qY.js";import"./Hidden-CaQ6AcOr.js";import"./useLabels-CuSdSuM5.js";import"./useButton-CnRE8ofO.js";import"./search-B79RHlHC.js";import"./createLucideIcon-xLqTy_XU.js";import"./ClearButton-FekCFKVh.js";import"./Button-DlzyzK84.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Dvc3cf-i.js";import"./VisuallyHidden-BPCvzmAs.js";import"./x-DLZX4-ID.js";import"./FieldError-D0XPClu_.js";import"./Text-DTHVKRvi.js";import"./Text-Dg2zxxbH.js";import"./RSPContexts-COny7Pe5.js";import"./Collection-B7cfVZ3K.js";import"./index-CRbTRMO1.js";import"./DragAndDrop-CYgUNkz5.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CUUhQe3s.js";import"./SelectionManager-CyVU1abT.js";import"./useEvent-juwi-LBt.js";import"./useDescription-BG0yfZwv.js";import"./inertValue-CU4BQHTq.js";import"./useHighlightSelectionDescription-Di-aUAzp.js";import"./useUpdateEffect-BEDR7Mst.js";import"./ListKeyboardDelegate-CcmS_bQH.js";import"./useHasTabbableChild-CgITi4Zm.js";import"./Checkbox-BhJLaMWj.js";import"./Form-4H72jiU6.js";import"./check-BKG1sG6b.js";import"./useToggleState-Bk9htqiJ.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
