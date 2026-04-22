import{r as m,f as l,j as t}from"./iframe-DIPCj7z0.js";import{S as d}from"./SearchField-BUegKdvO.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-zLxW6JLg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-1Jw3myEp.js";import"./clsx-B-dksMZM.js";import"./Form-Dqy01Zmd.js";import"./useFocusRing-CGC0Rs2i.js";import"./index-BMYuBTg8.js";import"./index-CLZ6wIud.js";import"./Input-io2_dlmK.js";import"./Hidden-DixPPjgd.js";import"./Button-XWLhDASZ.js";import"./useLabel-BuVDKvpb.js";import"./useLabels-a5aS50Gu.js";import"./useButton-B6P9-uWq.js";import"./FieldError-XsW3k3ta.js";import"./Text-DfA3YTZF.js";import"./clsx-Ciqy0D92.js";import"./Text-CutZY7em.js";import"./RSPContexts-COR8iAs7.js";import"./Group-DmXP4qj7.js";import"./useControlledState-BD_nezFk.js";import"./useLocalizedStringFormatter-CetMLESo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Gi9lLcxJ.js";import"./useField-DyYmemdb.js";import"./TextField.module-DdivwlC8.js";import"./search-CJf812hI.js";import"./createLucideIcon-BXzguI7t.js";import"./x-i9MPadT4.js";import"./useLocalizedStringFormatter-CD9GRZFK.js";import"./Button-Dd5S0QsR.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B7PA1Ynv.js";import"./Collection-DlaTgdHp.js";import"./index-BtYgIjFq.js";import"./DragAndDrop--Npix--2.js";import"./getScrollParent-CrP1MxC4.js";import"./scrollIntoView-BoRCBfrM.js";import"./SelectionIndicator-BBRkAeK5.js";import"./SelectionManager-C1peoY7k.js";import"./useEvent-C_MGKzuJ.js";import"./useDescription-FuIsSDja.js";import"./inertValue-Cw8BFP1J.js";import"./useHighlightSelectionDescription-D71Ae-jL.js";import"./useUpdateEffect-DvvsaU0c.js";import"./ListKeyboardDelegate-DJcS2y8P.js";import"./useHasTabbableChild-CfHgjQLh.js";import"./Checkbox-2_hv9uib.js";import"./check-BCpRvZtK.js";import"./useToggleState-D6UHqGoX.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
