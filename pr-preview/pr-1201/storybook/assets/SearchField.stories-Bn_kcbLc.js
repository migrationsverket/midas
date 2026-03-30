import{r as m,f as l,j as t}from"./iframe-DTOqtRPp.js";import{S as d}from"./SearchField-B8X83qhL.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DDyekpIq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CQz-p0Ar.js";import"./clsx-B-dksMZM.js";import"./Form-Cjvz3og7.js";import"./useFocusRing-jHCCwEPg.js";import"./index-ChMjBSia.js";import"./index-CEAST5hf.js";import"./Input-hXck_yNU.js";import"./Hidden-BopZmEN9.js";import"./Button-C4kKXxPS.js";import"./useLabel-BQ4cknfe.js";import"./useLabels-w95u50Wj.js";import"./useButton-sObWSv1u.js";import"./FieldError-B6hQSiJl.js";import"./Text-CIhwCa8A.js";import"./clsx-Ciqy0D92.js";import"./Text-BaCnxKWQ.js";import"./RSPContexts-mX6bJ66o.js";import"./Group-DP8-mIsy.js";import"./useControlledState-DPZt2fnR.js";import"./useLocalizedStringFormatter-BUk3tKu_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DblHJwAe.js";import"./useField-BbLqM0Ws.js";import"./TextField.module-DdivwlC8.js";import"./search-BjmfE3Fm.js";import"./createLucideIcon-DdZg643M.js";import"./x-CrpZHpR_.js";import"./useLocalizedStringFormatter-CV8JNlf3.js";import"./Button-CDDDIvIj.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DwgxUjwt.js";import"./Collection-cLo4pqcm.js";import"./index-UprO8IQs.js";import"./DragAndDrop-CcUvplAk.js";import"./getScrollParent-lUA4pL69.js";import"./scrollIntoView-Bampsmpi.js";import"./SelectionIndicator-Dt0VxfU8.js";import"./SelectionManager-Cx-QXgqi.js";import"./useEvent-CLOuM3cb.js";import"./useDescription-D7gs14Ar.js";import"./inertValue-Ck9PllZb.js";import"./useHighlightSelectionDescription-BSinPfHj.js";import"./useUpdateEffect-DPynXPaB.js";import"./ListKeyboardDelegate-BU9aP5mI.js";import"./useHasTabbableChild-DoEL2tto.js";import"./Checkbox-L89vyNp7.js";import"./check-C_wJyUe0.js";import"./useToggleState-uMd_FyCl.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
