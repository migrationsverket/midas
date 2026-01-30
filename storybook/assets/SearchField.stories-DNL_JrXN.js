import{r as m,f as l,j as t}from"./iframe-Ds-nK5jC.js";import{S as d}from"./SearchField-CqdIpysg.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-U1XMraiH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B9M6c-Zi.js";import"./utils-BWcc9EPK.js";import"./useLocalizedStringFormatter-CXBhyWlF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DOnrvLbp.js";import"./useFocusRing-DSAS5gOz.js";import"./index-BWszMgV4.js";import"./index-uHsAuulk.js";import"./useFormValidation-MJDJC9ZJ.js";import"./useField-CFPmWj_n.js";import"./Button-dHl8uENq.js";import"./Hidden-4dstmqQY.js";import"./useLabels-a2jSOYQl.js";import"./useButton-H43OBGIl.js";import"./search-wDR_DoLb.js";import"./createLucideIcon-xY7bNo4d.js";import"./ClearButton-CnDG95hd.js";import"./Button-CQLlpX_U.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DpSHxtYR.js";import"./VisuallyHidden-BeRc1dUa.js";import"./x-DNleDvIs.js";import"./FieldError-CDeKUF86.js";import"./Text-D4nZVrIm.js";import"./Text-cOJkqGeS.js";import"./RSPContexts-CMueCVj4.js";import"./Collection-C010Bm6D.js";import"./index-BBm7PgdT.js";import"./DragAndDrop-CoTqPyqP.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B-qsNA4q.js";import"./SelectionManager-DUDgU4NN.js";import"./useEvent-BAAt4FlS.js";import"./useDescription-CfEhRarO.js";import"./inertValue-Cut9lCvP.js";import"./useHighlightSelectionDescription-DtmQYGsW.js";import"./useUpdateEffect-Dtst6q7J.js";import"./ListKeyboardDelegate-ujXyInoy.js";import"./useHasTabbableChild-Cu_yDlzn.js";import"./Checkbox-DGTe3mNm.js";import"./Form-BBB5hpq1.js";import"./check-DdBWWYC9.js";import"./useToggleState-IL8jF9ip.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
