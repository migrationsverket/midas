import{r as m,f as l,j as t}from"./iframe-D7a0roTE.js";import{S as d}from"./SearchField-0e6HZGN-.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B2e_ijpa.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DDhJysn8.js";import"./utils-CCwC5od5.js";import"./useLocalizedStringFormatter-e3ysiM8J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DUDB8gXM.js";import"./useFocusRing-CFRP2Jek.js";import"./index-CFLLbIUX.js";import"./index-Bcz-F3t-.js";import"./useFormValidation-CFJsNuhs.js";import"./useField-sPhfvWpo.js";import"./Button-202_c7Iv.js";import"./Hidden-Dy39TreI.js";import"./useLabels-BtRp1y_K.js";import"./useButton-DiS7UUja.js";import"./search-qyUlbmwO.js";import"./createLucideIcon-CpMQKadj.js";import"./ClearButton-C6PCq6yC.js";import"./Button-BmkKd0hD.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CzDArdEs.js";import"./VisuallyHidden-C3QcPrAB.js";import"./x-DA_mepw-.js";import"./FieldError-CcwNjMdG.js";import"./Text-BeZ98S-S.js";import"./Text-BQJnC-MG.js";import"./RSPContexts-CZ_mWjdj.js";import"./Collection-D2cuxciY.js";import"./index-CRYr5dw0.js";import"./DragAndDrop-CmcOP-i8.js";import"./getScrollParent-DOj-Lfm1.js";import"./scrollIntoView-DNIYTqEF.js";import"./SelectionIndicator-BU_YSj6V.js";import"./SelectionManager-DtNgJa0N.js";import"./useEvent-BLyKonF-.js";import"./useDescription-3cPSrQCV.js";import"./inertValue-BB0Z48hZ.js";import"./useHighlightSelectionDescription-C0bt4IEG.js";import"./useUpdateEffect-BMCPESQK.js";import"./ListKeyboardDelegate-Dw3xad8c.js";import"./useHasTabbableChild--FQwY-Hn.js";import"./Checkbox-B3O9fat-.js";import"./Form-Do6u_iIQ.js";import"./check-OCIEVSo1.js";import"./useToggleState-DN2f_JZ8.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
