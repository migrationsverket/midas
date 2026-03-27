import{r as m,f as l,j as t}from"./iframe-CxkETeDd.js";import{S as d}from"./SearchField-D9Dhpv_e.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dj2jg7DJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-GlStkLEJ.js";import"./clsx-B-dksMZM.js";import"./Form-C5JH_F4V.js";import"./useFocusRing-Do0yfzWS.js";import"./index-BSb6ZrfR.js";import"./index-nMmCh7nR.js";import"./Input-DoY7pUez.js";import"./Hidden-CKsesGiK.js";import"./Button-M5zQwREp.js";import"./useLabel-BO_xYu1i.js";import"./useLabels-DaC1eol5.js";import"./useButton-DENm16UC.js";import"./FieldError-BWtspna3.js";import"./Text-CjYtEiaz.js";import"./clsx-Ciqy0D92.js";import"./Text-BAZIzjwA.js";import"./RSPContexts-DsMbIQ4H.js";import"./Group-B8gB1pu2.js";import"./useControlledState-Cqnjl-Rp.js";import"./useLocalizedStringFormatter-C1sxkLmf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DMiTRF45.js";import"./useField-DUhSjK8V.js";import"./TextField.module-DdivwlC8.js";import"./search-CSx8dDQ2.js";import"./createLucideIcon-C0eB9KvK.js";import"./x-B204znOg.js";import"./useLocalizedStringFormatter-53dmxcXe.js";import"./Button-CKmKD5ej.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BFccnY_O.js";import"./Collection-Be8p80xI.js";import"./index-D59Ky3Ki.js";import"./DragAndDrop-CuAqMOg1.js";import"./getScrollParent-DI7tR_KK.js";import"./scrollIntoView-B-8yvJ9-.js";import"./SelectionIndicator-zJXJpAJt.js";import"./SelectionManager-CmFM2kJA.js";import"./useEvent-B-R-vhKv.js";import"./useDescription-UrQ-w2r3.js";import"./inertValue-Cnm7T36z.js";import"./useHighlightSelectionDescription-DNdlYEnu.js";import"./useUpdateEffect-lLEmAG5o.js";import"./ListKeyboardDelegate-DML2M3Xa.js";import"./useHasTabbableChild-Va2zpnxm.js";import"./Checkbox-CZHZh1mp.js";import"./check-Bl_DcFEs.js";import"./useToggleState-DTq7y_-O.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
