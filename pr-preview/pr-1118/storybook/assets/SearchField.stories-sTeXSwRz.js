import{r as m,f as l,j as t}from"./iframe-8UJkVthP.js";import{S as d}from"./SearchField-1BIv_0MI.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BpBu9rJo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BDWBmxXy.js";import"./clsx-B-dksMZM.js";import"./Form-Dl9b4CYf.js";import"./useFocusRing-0HTfSbqX.js";import"./index-CmnEY_Qy.js";import"./index-Co6zkntU.js";import"./Input-JY_Jkgvs.js";import"./Hidden-D2CAjC8z.js";import"./Button-5Crp6oLI.js";import"./useLabels-CdJkQqk9.js";import"./useButton-MMd5ycyS.js";import"./FieldError-BeuaPtx6.js";import"./Text-CV-khTPA.js";import"./clsx-Ciqy0D92.js";import"./Text-FE_S5mZr.js";import"./RSPContexts-qbHEhELM.js";import"./Group-B9EFJzsK.js";import"./useControlledState-CQGiwWre.js";import"./useLocalizedStringFormatter-gIHOQjHO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-paqyKGLD.js";import"./useField-adX3beuP.js";import"./TextField.module-DdivwlC8.js";import"./search-jd7lGh53.js";import"./createLucideIcon-KCEZs7i4.js";import"./x-Bx_hLSbE.js";import"./useLocalizedStringFormatter-Dos3tI0u.js";import"./Button-ByNh2qq9.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-vq1pC-28.js";import"./Collection-BjLu6E75.js";import"./index-CiiwR1vG.js";import"./DragAndDrop-BnRP1Ek0.js";import"./getScrollParent-6Dr3zswo.js";import"./scrollIntoView-BW2PYDKv.js";import"./SelectionIndicator-BMVKAfis.js";import"./SelectionManager-DN6QIcY4.js";import"./useEvent-CbYAf6vF.js";import"./useDescription-BTR78MKM.js";import"./inertValue-B5b8NQEc.js";import"./useHighlightSelectionDescription-Cd3Gdxiq.js";import"./useUpdateEffect-CMoQagVN.js";import"./ListKeyboardDelegate-D2hlOZCJ.js";import"./useHasTabbableChild-CmRKLcp_.js";import"./Checkbox-Dloxh6ml.js";import"./check-Cu8NwU16.js";import"./useToggleState-pCh08-B9.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
