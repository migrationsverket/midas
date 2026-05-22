import{r as m,f as l,j as t}from"./iframe-DdBf1SRL.js";import{S as d}from"./SearchField-lhPobGDp.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-LoQrKH9r.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DMchxVzX.js";import"./clsx-B-dksMZM.js";import"./Form-BnkXR6RV.js";import"./useFocusRing-B7kbWjnk.js";import"./index-CkQqcEDO.js";import"./index-Dx_kN6Ou.js";import"./Input-BZTpPI0z.js";import"./Hidden-DnCBwxQo.js";import"./Button-DfVfuE86.js";import"./useLabel-Cmr2t4Vn.js";import"./useLabels-BTBbAQZZ.js";import"./useButton-Bi1rLOkK.js";import"./FieldError-CxsQvr-l.js";import"./Text-BubyCo8k.js";import"./clsx-Ciqy0D92.js";import"./Text-Crsqw0eJ.js";import"./RSPContexts-DeLkFkii.js";import"./Group-Dz-A39lc.js";import"./useControlledState-aSEVnCiN.js";import"./useLocalizedStringFormatter-B5aKiSMw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BwJPM4sj.js";import"./useField-B-UKPEcq.js";import"./TextField.module-DdivwlC8.js";import"./search-C4W9atMZ.js";import"./createLucideIcon-DMjdayIV.js";import"./x-DQUfmUsq.js";import"./useLocalizedStringFormatter-D9iDsPFm.js";import"./Button-BcNKuXh9.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-TAipgByj.js";import"./Collection-iaZXBrxK.js";import"./index-DpcT8N6d.js";import"./DragAndDrop-DvfPlL7b.js";import"./getScrollParent-FpAGmNqP.js";import"./scrollIntoView-BZzoMKS8.js";import"./SelectionIndicator-CuhYxI4d.js";import"./SelectionManager-DWXdlFy8.js";import"./useEvent-DSMuUAnY.js";import"./useDescription-zrMNjBsf.js";import"./inertValue-zbQiu2nb.js";import"./useHighlightSelectionDescription-dqhteKYS.js";import"./useUpdateEffect-BPY-XS72.js";import"./ListKeyboardDelegate-B9CnOcQ4.js";import"./useHasTabbableChild-_fmKLD_g.js";import"./Checkbox-BxNoQrsX.js";import"./check-D7j61AyI.js";import"./useToggleState-CmagXPQ9.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
