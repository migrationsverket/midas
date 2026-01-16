import{r as m,f as l,j as t}from"./iframe-CJgCBOSn.js";import{S as d}from"./SearchField-czS2Aouc.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BgrUu-Br.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ChV93gD3.js";import"./utils-g4p4NUI-.js";import"./useLocalizedStringFormatter-CP4b5mEF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CTGAYV6K.js";import"./useFocusRing-Yl6f3H1r.js";import"./index-D7z4XUKW.js";import"./index-JexUwc7G.js";import"./useFormValidation-BhcJhbtd.js";import"./useField-BIMlSPPT.js";import"./Button-CBtGc9Ub.js";import"./Hidden-ImloFknN.js";import"./useLabels-Dg-uXO6o.js";import"./useButton-Wu2FI5Vk.js";import"./search-uMgUQAvz.js";import"./createLucideIcon-Dnv4tKqV.js";import"./ClearButton-BeSJqckf.js";import"./Button-Cymdj4BH.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BC67XuMA.js";import"./VisuallyHidden-lpY5sFDd.js";import"./x-C3uYOi1E.js";import"./FieldError-BvHL-L14.js";import"./Text-DWxQCZze.js";import"./Text-Dgha63Ct.js";import"./RSPContexts-D9FhM06Z.js";import"./Collection-CwyFg43Q.js";import"./index-1nYhzryp.js";import"./DragAndDrop-CSOdn6JS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B-7KPouL.js";import"./SelectionManager-LF9c0-Pj.js";import"./useEvent-CGoIXu2x.js";import"./useDescription-B_8Lnofc.js";import"./inertValue-rt4R1NoB.js";import"./useHighlightSelectionDescription-W3WgLhsX.js";import"./useUpdateEffect-BpdQZvBU.js";import"./ListKeyboardDelegate-Dlthfsmd.js";import"./useHasTabbableChild-DvTODr3V.js";import"./Checkbox-DlYLyuve.js";import"./Form-BdW_DhZm.js";import"./check-CGlIQRFQ.js";import"./useToggleState-KgwE-ImN.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
