import{r as m,f as l,j as t}from"./iframe-4YO2ARDc.js";import{S as d}from"./SearchField-CpsoNZYm.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CudmpcLw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bfs2eoJd.js";import"./clsx-B-dksMZM.js";import"./Form-DMtAV8E3.js";import"./useFocusRing-CIkko9vI.js";import"./index-D4eJv5Ic.js";import"./index-BTuiHaBk.js";import"./Input-CaC0WhUN.js";import"./Hidden-CaP86mrU.js";import"./Button-B4lRjwhF.js";import"./useLabel-p6x45DKH.js";import"./useLabels-CWRsfwtI.js";import"./useButton-BKsQrDS8.js";import"./FieldError-OsSBmOrk.js";import"./Text-CzwdOm33.js";import"./clsx-Ciqy0D92.js";import"./Text-BPQIT5o1.js";import"./RSPContexts-DcHnq2yo.js";import"./Group-BDS3-yNc.js";import"./useControlledState-DMcdq1J4.js";import"./useLocalizedStringFormatter-D7Kcj2Mq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BK8BXxJ6.js";import"./useField-ChVpaYjB.js";import"./TextField.module-DdivwlC8.js";import"./search-lEKaixlv.js";import"./createLucideIcon-DgKHzC9k.js";import"./x-cOxoPhDE.js";import"./useLocalizedStringFormatter-DI81rz-a.js";import"./Button-Bn5ZQsd6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DJTNtHiX.js";import"./Collection-J8Yp6y2u.js";import"./index-DYcuYrZs.js";import"./DragAndDrop-DXYs8aMf.js";import"./getScrollParent-BDe6vMxS.js";import"./scrollIntoView-Ya4JCi80.js";import"./SelectionIndicator-o52jKFWI.js";import"./SelectionManager-5YCFIISk.js";import"./useEvent-Cqqb_9-s.js";import"./useDescription-4EdgaLtr.js";import"./inertValue-AhdGL0DJ.js";import"./useHighlightSelectionDescription-B19GUHCU.js";import"./useUpdateEffect-Dmp2Tuce.js";import"./ListKeyboardDelegate-74egtXjZ.js";import"./useHasTabbableChild-BxS3moyL.js";import"./Checkbox-BrBA8k9-.js";import"./check-B9kzHd4T.js";import"./useToggleState-cHDL9vfZ.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
