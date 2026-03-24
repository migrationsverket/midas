import{r as m,f as l,j as t}from"./iframe-BkVzc2jf.js";import{S as d}from"./SearchField-DLykuhTL.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BH5S9591.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BygJjxp_.js";import"./clsx-B-dksMZM.js";import"./Form-DyPSg3uh.js";import"./useFocusRing-Aiyx2UXL.js";import"./index-DCHZ6NdQ.js";import"./index-CRBDyq3W.js";import"./Input-BxA217iM.js";import"./Hidden-R6jv-Zbn.js";import"./Button-DC3ZjroM.js";import"./useLabels-r2kWzK6Q.js";import"./useButton-B1UvRsW1.js";import"./FieldError-BwPk1h0q.js";import"./Text-Cl9gTfqF.js";import"./clsx-Ciqy0D92.js";import"./Text-B79zESTX.js";import"./RSPContexts-LbRQIp3l.js";import"./Group-BBINmdWw.js";import"./useControlledState-LZdmvusm.js";import"./useLocalizedStringFormatter-DAoOwKNh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Nv1QTVpM.js";import"./useField-C412GoGD.js";import"./TextField.module-DdivwlC8.js";import"./search-CNiCM5SO.js";import"./createLucideIcon-BjNI9TSY.js";import"./x-BsyZ_dlH.js";import"./useLocalizedStringFormatter-BzPZ_rQR.js";import"./Button-ZTyLTH5E.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BWjyWmb6.js";import"./Collection-CFuYVz80.js";import"./index-CqLT7pz4.js";import"./DragAndDrop-UEm0p9dM.js";import"./getScrollParent-CTmctxBz.js";import"./scrollIntoView-Yjo_y5ur.js";import"./SelectionIndicator-CMspJvvR.js";import"./SelectionManager-HKzWsq0f.js";import"./useEvent-D9_iLH0i.js";import"./useDescription-CYDZbRK4.js";import"./inertValue-DwhyEJmU.js";import"./useHighlightSelectionDescription-CY_qmjXJ.js";import"./useUpdateEffect-Bow5QfA4.js";import"./ListKeyboardDelegate-CRHKUCzm.js";import"./useHasTabbableChild-02Q9xsxf.js";import"./Checkbox-C53229aR.js";import"./check-CaYG-ERe.js";import"./useToggleState-B2M_Q020.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
