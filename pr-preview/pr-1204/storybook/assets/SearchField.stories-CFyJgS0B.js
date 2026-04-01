import{r as m,f as l,j as t}from"./iframe-Bp0IlJF2.js";import{S as d}from"./SearchField-Bty3fyI2.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BZlIP4ye.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CjNbFGiN.js";import"./clsx-B-dksMZM.js";import"./Form-wrPeumQm.js";import"./useFocusRing-DY1AMT3v.js";import"./index-XmjshE1X.js";import"./index-DtgVGp9d.js";import"./Input-B0mYY1Vp.js";import"./Hidden-D7-h4wXt.js";import"./Button-JPYQALf4.js";import"./useLabel-DUfJ5yQb.js";import"./useLabels-BVCe-bH1.js";import"./useButton-BNdBcGOL.js";import"./FieldError-wBwSD7iB.js";import"./Text-BZtrmicZ.js";import"./clsx-Ciqy0D92.js";import"./Text-DQDnVDGB.js";import"./RSPContexts-CYpW2htd.js";import"./Group-CFFXu7W6.js";import"./useControlledState-ClzZCqkV.js";import"./useLocalizedStringFormatter-BXFHs5VP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-uQIvQpAv.js";import"./useField-DvLvioZE.js";import"./TextField.module-DdivwlC8.js";import"./search-COB7MKe-.js";import"./createLucideIcon-DC4UrGzm.js";import"./x-C5nPMzLL.js";import"./useLocalizedStringFormatter-DkhY-lw-.js";import"./Button-CuWSXiv5.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BVXE9jAl.js";import"./Collection-B-doHFhu.js";import"./index-CUA_AUUL.js";import"./DragAndDrop-BJQwajY5.js";import"./getScrollParent-BXxENsSc.js";import"./scrollIntoView-BIHn6aZC.js";import"./SelectionIndicator-COAzCbhB.js";import"./SelectionManager-C2XmfmHN.js";import"./useEvent-CSrgknyI.js";import"./useDescription-Dhw9gkBv.js";import"./inertValue-Bugeiupk.js";import"./useHighlightSelectionDescription-MEqUucvz.js";import"./useUpdateEffect-DQbyf-pJ.js";import"./ListKeyboardDelegate-DOXl-tDp.js";import"./useHasTabbableChild-DomB3Dbu.js";import"./Checkbox-CcdO9vaw.js";import"./check-C70qoNFu.js";import"./useToggleState-BUoJnzVC.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
