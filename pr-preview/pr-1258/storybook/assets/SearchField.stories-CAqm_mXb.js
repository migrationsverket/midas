import{r as m,f as l,j as t}from"./iframe-1_iu-uVv.js";import{S as d}from"./SearchField-Bzz7zfBx.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C4WhW6cz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D8XDfVqo.js";import"./clsx-B-dksMZM.js";import"./Form-Bs2TzZTt.js";import"./useFocusRing-CLMMEccq.js";import"./index-DaFkej-O.js";import"./index-8FVPoEJc.js";import"./Input-IBbhfJob.js";import"./Hidden-7JO0YZlM.js";import"./Button-C-cqr9pq.js";import"./useLabel-DW7Clw8B.js";import"./useLabels-CD6qsxzR.js";import"./useButton-QeuVXvqT.js";import"./FieldError--XBiql7z.js";import"./Text-Cs17jUaF.js";import"./clsx-Ciqy0D92.js";import"./Text-Cvi52zQo.js";import"./RSPContexts-Bv3dZUJW.js";import"./Group-DKezO36b.js";import"./useControlledState-DeicQIqX.js";import"./useLocalizedStringFormatter-DQ-EATPr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BCY0WVMU.js";import"./useField-D0gCtfzu.js";import"./TextField.module-DdivwlC8.js";import"./search-7HDLKHyc.js";import"./createLucideIcon-BbCelBYg.js";import"./x-BuusROzJ.js";import"./useLocalizedStringFormatter-ByENZTtA.js";import"./Button-3xGdYp6o.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CLNANI2G.js";import"./Collection-D99_FTQW.js";import"./index-YIsAHUGT.js";import"./DragAndDrop-BsKIRLRQ.js";import"./getScrollParent-CfG8ol6W.js";import"./scrollIntoView-CoHaVyLh.js";import"./SelectionIndicator-BGZ-Uahi.js";import"./SelectionManager-DGCLs2FY.js";import"./useEvent-CZV_7zjz.js";import"./useDescription-C3hybjUT.js";import"./inertValue-SmYKeN3i.js";import"./useHighlightSelectionDescription-Bap_YUcI.js";import"./useUpdateEffect-DbC_5c-q.js";import"./ListKeyboardDelegate-BgFHXkfP.js";import"./useHasTabbableChild-acrA5UED.js";import"./Checkbox-D6goytZp.js";import"./check-BY6MOyur.js";import"./useToggleState-Culx0Igr.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
