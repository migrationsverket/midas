import{r as m,f as l,j as t}from"./iframe-BXrAfsjq.js";import{S as d}from"./SearchField-tkgynmQN.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CY11HC7u.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CpFSzBx7.js";import"./utils-cdAGpjgV.js";import"./useLocalizedStringFormatter-A_mBW6J-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B5LyVcim.js";import"./useFocusRing-DgM5hB_S.js";import"./index-DX8EYVJ-.js";import"./index-Dw2cXarQ.js";import"./useFormValidation-BLxToia1.js";import"./useField-JUGchugn.js";import"./Button-By4fIxyI.js";import"./Hidden-DJwBGsVR.js";import"./useLabels-CpmKdeaa.js";import"./useButton-V4TYrtKf.js";import"./search-WQfmHsCU.js";import"./createLucideIcon-CYigPS-O.js";import"./ClearButton-Bc1cjg5-.js";import"./Button-ClxvzqtQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CRM_oh5H.js";import"./VisuallyHidden-DmvbNouy.js";import"./x-D2S3wmoi.js";import"./FieldError-BVjBbXJN.js";import"./Text-aWKwJErA.js";import"./Text-DoxGzedC.js";import"./RSPContexts-CF2MUXv8.js";import"./Collection-DYPBJSc4.js";import"./index-OX4n_qIn.js";import"./DragAndDrop-CkfD3QFY.js";import"./getScrollParent-CVvcmYh-.js";import"./scrollIntoView-3U7tLxsU.js";import"./SelectionIndicator-DVkUuBm9.js";import"./SelectionManager-ICojmhGd.js";import"./useEvent-BoaBlzfX.js";import"./useDescription-t7xMbrFZ.js";import"./inertValue-CvZgwLaM.js";import"./useHighlightSelectionDescription-CIhu0gJW.js";import"./useUpdateEffect-sa8pQ5dh.js";import"./ListKeyboardDelegate-kcZGjyqX.js";import"./useHasTabbableChild-v33a1eeP.js";import"./Checkbox-DgWI9MI3.js";import"./Form-vt0dRRGK.js";import"./check-BkBXeNks.js";import"./useToggleState-CUF9eVcm.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
