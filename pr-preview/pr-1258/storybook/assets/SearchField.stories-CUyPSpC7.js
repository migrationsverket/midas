import{r as m,f as l,j as t}from"./iframe-DE3udc98.js";import{S as d}from"./SearchField-Cb7ttTmw.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-NtDEsYxG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BZFqyVfK.js";import"./clsx-B-dksMZM.js";import"./Form-bIhb4EIq.js";import"./useFocusRing-Zfbb9wtm.js";import"./index-DsLsEgIC.js";import"./index-TlyN-2Ns.js";import"./Input-6rAJLlXY.js";import"./Hidden-B3N7s3Fy.js";import"./Button-WyeeTejZ.js";import"./useLabel-BaazdV9R.js";import"./useLabels-CkuL1gsk.js";import"./useButton-iHShjyV-.js";import"./FieldError-HOINxNuD.js";import"./Text-B_7CE5hn.js";import"./clsx-Ciqy0D92.js";import"./Text-6UvYXfTp.js";import"./RSPContexts-DDA8iB-A.js";import"./Group-B49H1fYm.js";import"./useControlledState-CKJ2TdtV.js";import"./useLocalizedStringFormatter-C2IC4Uej.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BBnno9zv.js";import"./useField-XJ9uRbgJ.js";import"./TextField.module-DdivwlC8.js";import"./search-BUFgTU17.js";import"./createLucideIcon-DBgVndRE.js";import"./x-Did9_kjk.js";import"./useLocalizedStringFormatter-D9xfpa_H.js";import"./Button-D9EvRssF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-JI0zcCIW.js";import"./Collection-DsWBFVqV.js";import"./index-CTmFy_vj.js";import"./DragAndDrop-CVxQ4LFN.js";import"./getScrollParent-CISTh7Q2.js";import"./scrollIntoView-CopONKPx.js";import"./SelectionIndicator-Bn5sd7Os.js";import"./SelectionManager-BBjREWqS.js";import"./useEvent-Bsmzdkq1.js";import"./useDescription-DUhpeiqJ.js";import"./inertValue-XgQGjPqy.js";import"./useHighlightSelectionDescription-Dz9_HVVD.js";import"./useUpdateEffect-D4lhKZMt.js";import"./ListKeyboardDelegate-CmqxmKAk.js";import"./useHasTabbableChild-D_dQKosX.js";import"./Checkbox-DgWd1LkT.js";import"./check-DrfBAVvD.js";import"./useToggleState-C-zSmbzE.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
