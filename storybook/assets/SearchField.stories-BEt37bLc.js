import{r as m,f as l,j as t}from"./iframe-D0Ebfh30.js";import{S as d}from"./SearchField-CWuvILPV.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BA8Gnb48.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DnMbAmQG.js";import"./utils-HMZMjbfe.js";import"./useLocalizedStringFormatter-D3idiCWs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D52sJq39.js";import"./useFocusRing-B7feqinX.js";import"./index-DEZ4pZ8U.js";import"./index-hoemp_fb.js";import"./useFormValidation-DfON3Cpr.js";import"./useField-mjK8xeaJ.js";import"./Button-C5q_bVXl.js";import"./Hidden-CZL81F2Z.js";import"./useLabels-Dw4NTpgb.js";import"./useButton-RhvsfLc2.js";import"./search-CIk7r-rX.js";import"./createLucideIcon-CdE5-Po6.js";import"./ClearButton-CXXir44S.js";import"./Button-DpyS-bWo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CtniQXCD.js";import"./VisuallyHidden-O6H9xmHX.js";import"./x-BvLcmEC0.js";import"./FieldError-CVFSCD0p.js";import"./Text-QgdY8FFj.js";import"./Text-BdJ9wmlp.js";import"./RSPContexts-D-VgtPqq.js";import"./Collection-BPcTJEg1.js";import"./index-DD4GNLTQ.js";import"./DragAndDrop-REyH7G75.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cq-a500K.js";import"./SelectionManager-Dbwed4v0.js";import"./useEvent-C-0Xhkyy.js";import"./useDescription-DMByz_uC.js";import"./inertValue-CSqELs3b.js";import"./useHighlightSelectionDescription-Dr_UPZ5O.js";import"./useUpdateEffect-NQlzaJGF.js";import"./ListKeyboardDelegate-CcCPHl5Y.js";import"./useHasTabbableChild-Db5XPyKM.js";import"./Checkbox-BaT9unyw.js";import"./Form-C-RY8D45.js";import"./check-SaAOwRMG.js";import"./useToggleState-CYhkkVqJ.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
