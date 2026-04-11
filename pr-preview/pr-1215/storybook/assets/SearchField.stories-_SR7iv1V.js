import{r as m,f as l,j as t}from"./iframe-DagPb3DG.js";import{S as d}from"./SearchField-CT8xC6HN.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Db0r9GiJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DEIIZrT8.js";import"./clsx-B-dksMZM.js";import"./Form-B9MvElX0.js";import"./useFocusRing-DV81koGP.js";import"./index-X3kKW3OI.js";import"./index-B3KKDvTU.js";import"./Input-CkAMwzA7.js";import"./Hidden-BaZDL4oi.js";import"./Button-Ckt0c6HW.js";import"./useLabel-DEs8DT9p.js";import"./useLabels-mT4eX36O.js";import"./useButton-BMw6H5IS.js";import"./FieldError-DRukOLZw.js";import"./Text-DrUxMYO_.js";import"./clsx-Ciqy0D92.js";import"./Text-DqORZFkZ.js";import"./RSPContexts-BcGBAh60.js";import"./Group-Dxyy6nmS.js";import"./useControlledState-CD6VDT_E.js";import"./useLocalizedStringFormatter-B_hF3Aaq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CJn-OTNZ.js";import"./useField-ZI9WuaQD.js";import"./TextField.module-DdivwlC8.js";import"./search-CegU4R9P.js";import"./createLucideIcon-KVoeMAdo.js";import"./x-DDrUqxbS.js";import"./useLocalizedStringFormatter-C9lWcR8U.js";import"./Button-DeUqMdFb.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BiE9yBGm.js";import"./Collection-DeRVKKKm.js";import"./index-CBRKms-h.js";import"./DragAndDrop-sMSBsNIA.js";import"./getScrollParent-CH3EMup_.js";import"./scrollIntoView-C3PoXb1x.js";import"./SelectionIndicator-DfCL_lJp.js";import"./SelectionManager-B5aNGbbs.js";import"./useEvent-Cclj6Db-.js";import"./useDescription-BqZkbbJU.js";import"./inertValue-ygv7W01k.js";import"./useHighlightSelectionDescription-BFYkKVQE.js";import"./useUpdateEffect-D_owBv_C.js";import"./ListKeyboardDelegate-Ui_fhppm.js";import"./useHasTabbableChild-rIEuv1By.js";import"./Checkbox-CvQ68Pev.js";import"./check-DJH9QBHE.js";import"./useToggleState-CHbJBhc7.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
