import{r as m,f as l,j as t}from"./iframe-DFebKffn.js";import{S as d}from"./SearchField-DPoNaOOt.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BaQ0xEOC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-J_OqfxpN.js";import"./clsx-B-dksMZM.js";import"./Form-nCobm3CY.js";import"./useFocusRing-C3NPJWuR.js";import"./index-fFDBVBnh.js";import"./index-BJ2AWJ3X.js";import"./Input-YR7zVes6.js";import"./Hidden-BATde4xQ.js";import"./Button-BZDCT8jS.js";import"./useLabel-B8lMlR1q.js";import"./useLabels-C1qgN7Qm.js";import"./useButton-C0xusnOU.js";import"./FieldError-CqV6hYY3.js";import"./Text-jpnaKsAZ.js";import"./clsx-Ciqy0D92.js";import"./Text-B-BzwR12.js";import"./RSPContexts-Cvf_UqQA.js";import"./Group-DEOBuZSS.js";import"./useControlledState-BBnpHgMO.js";import"./useLocalizedStringFormatter-DT9MjXti.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CRtvC267.js";import"./useField-B521Xtuh.js";import"./TextField.module-DdivwlC8.js";import"./search-DMuNiEtc.js";import"./createLucideIcon-eIhYDTFQ.js";import"./x-udLSc6dJ.js";import"./useLocalizedStringFormatter-1z23XCra.js";import"./Button-CAFfH1xQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-J2xwiqaN.js";import"./Collection-C3aJ_YG1.js";import"./index-WykGGTgN.js";import"./DragAndDrop-BDcZI7fZ.js";import"./getScrollParent-C72LLC1f.js";import"./scrollIntoView-Ay2HlXpl.js";import"./SelectionIndicator-tE_LDChe.js";import"./SelectionManager-DnvZe7fF.js";import"./useEvent-BefO7eCM.js";import"./useDescription-1A7QrMbF.js";import"./inertValue-BkeMomRP.js";import"./useHighlightSelectionDescription-6GsFFKxT.js";import"./useUpdateEffect-DHNsqo72.js";import"./ListKeyboardDelegate-CB2LXJR4.js";import"./useHasTabbableChild-_rNCrkkn.js";import"./Checkbox-CyF2GAqA.js";import"./check-Gozdg3Kj.js";import"./useToggleState-BFgAcz0Q.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
