import{r as m,f as l,j as t}from"./iframe-P3qrm_tw.js";import{S as d}from"./SearchField-C4piocAj.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-4mIjOqQu.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cu9HNXzK.js";import"./clsx-B-dksMZM.js";import"./Form-YJB6MmV5.js";import"./useFocusRing-BLJ-Rv5B.js";import"./index-sMyOSi6p.js";import"./index-DWrpe-jF.js";import"./Input-DPEGkuqx.js";import"./Hidden-BdxXq6fe.js";import"./Button-DhFyMRUa.js";import"./useLabel-CyrOFGd3.js";import"./useLabels-C-xox_2r.js";import"./useButton-Co-DeDts.js";import"./FieldError-BiTTAlmO.js";import"./Text-GLSAKrWj.js";import"./clsx-Ciqy0D92.js";import"./Text-3plXOlwA.js";import"./RSPContexts-BPVGWq9w.js";import"./Group-CrusDawx.js";import"./useControlledState-UTFpRQoc.js";import"./useLocalizedStringFormatter-CJciJbzM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bb3OTzeD.js";import"./useField-Cj8lvb17.js";import"./TextField.module-DdivwlC8.js";import"./search-BJ1EKhi8.js";import"./createLucideIcon-dl19Mkak.js";import"./x-CgDpVAro.js";import"./useLocalizedStringFormatter-CDAilngZ.js";import"./Button-CvMUPzzi.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BQNLfJdW.js";import"./Collection-BfPyiiOr.js";import"./index-B_B3CX6j.js";import"./DragAndDrop-DovuS_ff.js";import"./getScrollParent-DDX5O9pm.js";import"./scrollIntoView-D7nJ6B6R.js";import"./SelectionIndicator-NCDsTiNC.js";import"./SelectionManager-CmZUjzIx.js";import"./useEvent-uJeReNRd.js";import"./useDescription-Dx_6VVp1.js";import"./inertValue-Ug5uYHN1.js";import"./useHighlightSelectionDescription-8xUlargx.js";import"./useUpdateEffect-CnP4w1c-.js";import"./ListKeyboardDelegate-BOK_v8Uu.js";import"./useHasTabbableChild-BprH2xEb.js";import"./Checkbox-BAYrJ1RT.js";import"./check-BfzzvidH.js";import"./useToggleState-8UxkSJ5B.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
