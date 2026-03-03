import{r as m,f as l,j as t}from"./iframe-Cr1emYMW.js";import{S as d}from"./SearchField-CCCS5pi5.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BSD_Y9Mr.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B64MCg1r.js";import"./utils-BYhslQdw.js";import"./useLocalizedStringFormatter-D5l-TwjB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BravI5cu.js";import"./useFocusRing-DwGfHlXU.js";import"./index-CiTapa96.js";import"./index-Cl1_f9xd.js";import"./useFormValidation-Nhhgb2EE.js";import"./useField-BTs-PD6t.js";import"./Button-CEW_shex.js";import"./Hidden-BsA5K8lw.js";import"./useLabels-Db4gCzxq.js";import"./useButton-p5P1a05m.js";import"./search-DzA7GUvs.js";import"./createLucideIcon-GgkdFjqM.js";import"./ClearButton-B94x8ffq.js";import"./Button-BPrHdrSQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DuJA0Avn.js";import"./VisuallyHidden-CrqhJx50.js";import"./x-Bw4oGsQc.js";import"./FieldError-B0n-brmG.js";import"./Text-DDXxWSnO.js";import"./Text-CnKjHHeh.js";import"./RSPContexts-B-a6Suia.js";import"./Collection-CjiqYly9.js";import"./index-Bh9qVIDQ.js";import"./DragAndDrop-CJR4qLxB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTV7kd3r.js";import"./SelectionManager-CEP2HlMb.js";import"./useEvent-CQ30ytXp.js";import"./useDescription-CkLwrZ6Q.js";import"./inertValue-BivDuDBS.js";import"./useHighlightSelectionDescription-D0t-MTA-.js";import"./useUpdateEffect-Cz9JwBnr.js";import"./ListKeyboardDelegate-DwqMwEwM.js";import"./useHasTabbableChild-lknl8aey.js";import"./Checkbox-D0WCaCLY.js";import"./Form-PPaHTaru.js";import"./check-CWS-4W0B.js";import"./useToggleState-eBpL6zIs.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
