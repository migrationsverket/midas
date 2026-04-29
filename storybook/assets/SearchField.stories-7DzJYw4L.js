import{r as m,f as l,j as t}from"./iframe-HOh296WD.js";import{S as d}from"./SearchField-DiFK2oIO.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DRnOi3sO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DZ8gsIC2.js";import"./clsx-B-dksMZM.js";import"./Form-MZ71z1xz.js";import"./useFocusRing-DYVJSnUE.js";import"./index-DjQqBjj0.js";import"./index-1a6t-JIH.js";import"./Input-DB_-mc8n.js";import"./Hidden-Cnam6lCF.js";import"./Button-WtWoZgXq.js";import"./useLabel-hzJO6Opo.js";import"./useLabels-GBDC-30s.js";import"./useButton-2yjYEibm.js";import"./FieldError-D6lU0Pje.js";import"./Text-B6416v9E.js";import"./clsx-Ciqy0D92.js";import"./Text-Bv9eh8EN.js";import"./RSPContexts-d4Cds5di.js";import"./Group-HvG2Yti2.js";import"./useControlledState-Bg0Nqr_y.js";import"./useLocalizedStringFormatter-ohmrZLXW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ChoDBSx4.js";import"./useField-BFtU-cbq.js";import"./TextField.module-DdivwlC8.js";import"./search-Dfphk_Db.js";import"./createLucideIcon-NVlRk-Ze.js";import"./x-DOfhN6f-.js";import"./useLocalizedStringFormatter-B6GQhFME.js";import"./Button-BYcFvZWu.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C9pq-kak.js";import"./Collection-BZa-_VGk.js";import"./index-BDx-WWmG.js";import"./DragAndDrop-CWpDYC26.js";import"./getScrollParent-CvmsooRi.js";import"./scrollIntoView-lPtJp7l_.js";import"./SelectionIndicator-CoYjaNwA.js";import"./SelectionManager-CjAAe4Dw.js";import"./useEvent-CtSfpuPP.js";import"./useDescription-D6Cyf8Wc.js";import"./inertValue-BWcfltMk.js";import"./useHighlightSelectionDescription-BGU1K_Aj.js";import"./useUpdateEffect-WGwIJDUw.js";import"./ListKeyboardDelegate-BOVwko3u.js";import"./useHasTabbableChild-DMgNMZPn.js";import"./Checkbox-CrwpeLzR.js";import"./check-CK4UTI50.js";import"./useToggleState-DLrkSDyj.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
