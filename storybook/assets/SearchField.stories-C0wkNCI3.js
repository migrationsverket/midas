import{r as m,f as l,j as t}from"./iframe-DOBgJI-y.js";import{S as d}from"./SearchField-lrwN5NvV.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-zpwWqiRo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DiaRguFq.js";import"./clsx-B-dksMZM.js";import"./Form-DQ-r7Yap.js";import"./useFocusRing-BQr5-3Np.js";import"./index-X29No980.js";import"./index-mBWPsfNs.js";import"./Input-DGML-3Zm.js";import"./Hidden-DRJRklAH.js";import"./Button-iOZwwJt-.js";import"./useLabel-CwHTcLwx.js";import"./useLabels-DQJyw6TD.js";import"./useButton-q5vZ9ZE2.js";import"./FieldError-BPSmjDw6.js";import"./Text-CGuvF1HY.js";import"./clsx-Ciqy0D92.js";import"./Text-DFLO7oRJ.js";import"./RSPContexts-D1vu3Vuz.js";import"./Group-DS0v0YDF.js";import"./useControlledState-DuJeSPKv.js";import"./useLocalizedStringFormatter-DKxraR3H.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CId_-ye5.js";import"./useField-22FoNi1Z.js";import"./TextField.module-DdivwlC8.js";import"./search-BUJTU0ab.js";import"./createLucideIcon-DcZtHlnh.js";import"./x-BRuwBP3I.js";import"./useLocalizedStringFormatter-B7OxMwVs.js";import"./Button-u1ZblIyK.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-mcCQW-OH.js";import"./Collection-CQCqI1zo.js";import"./index-_K1HwoT7.js";import"./DragAndDrop-DyOIqwXm.js";import"./getScrollParent-l3TZr912.js";import"./scrollIntoView-D0LuDjH5.js";import"./SelectionIndicator-CiEVc6IP.js";import"./SelectionManager-BOMbf9lp.js";import"./useEvent-B26EYKij.js";import"./useDescription-BorXdBcC.js";import"./inertValue-LZBR3Dxr.js";import"./useHighlightSelectionDescription-CCqHgz1O.js";import"./useUpdateEffect-Dqt-qXKB.js";import"./ListKeyboardDelegate-DEvkxBuI.js";import"./useHasTabbableChild-dPHvDEKh.js";import"./Checkbox-B_N9-l7y.js";import"./check-CHSRmvUz.js";import"./useToggleState-BvRdfMMU.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
