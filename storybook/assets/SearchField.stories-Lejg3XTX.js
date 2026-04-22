import{r as m,f as l,j as t}from"./iframe-CYBQlmyh.js";import{S as d}from"./SearchField-Bah4Vi23.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CjDUG7TA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CjHCv0XO.js";import"./clsx-B-dksMZM.js";import"./Form-CG88XjbO.js";import"./useFocusRing-Cpo9J0gL.js";import"./index-K5PVphWA.js";import"./index-DiuA4cA3.js";import"./Input-BAaIFmf5.js";import"./Hidden-CqWz7xzF.js";import"./Button-BOrWC_ny.js";import"./useLabel-CFOjik7v.js";import"./useLabels-L-SzfrFb.js";import"./useButton-BfOUikWI.js";import"./FieldError-BU-DnlRI.js";import"./Text-CXwGYn4Y.js";import"./clsx-Ciqy0D92.js";import"./Text-B63Qy0n5.js";import"./RSPContexts-BhOh3g1F.js";import"./Group-B2xH6Tb7.js";import"./useControlledState-bAyCG7NY.js";import"./useLocalizedStringFormatter-DjA_iZCY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DjQ_SLXH.js";import"./useField-oiS_17BV.js";import"./TextField.module-DdivwlC8.js";import"./search-kjZMO9qm.js";import"./createLucideIcon-CC51vNZq.js";import"./x-J2AEua27.js";import"./useLocalizedStringFormatter-BE4MzKLw.js";import"./Button-V8iqrR4o.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DCVaQ010.js";import"./Collection-DlxFXgXK.js";import"./index-CU5GEWiP.js";import"./DragAndDrop-BZMXBfBs.js";import"./getScrollParent-TdVCvC4y.js";import"./scrollIntoView-DBa2FBnm.js";import"./SelectionIndicator-2OWYtRRL.js";import"./SelectionManager-DAlAVFSS.js";import"./useEvent-wP5p6MOh.js";import"./useDescription-ZMuH04v7.js";import"./inertValue-BoS8CLMi.js";import"./useHighlightSelectionDescription-6w9CiwZG.js";import"./useUpdateEffect-BrCCCrxK.js";import"./ListKeyboardDelegate-UVU4819P.js";import"./useHasTabbableChild-BhxYCp87.js";import"./Checkbox-DMAh443F.js";import"./check-BioLDgK2.js";import"./useToggleState-DKZ2iNLh.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
