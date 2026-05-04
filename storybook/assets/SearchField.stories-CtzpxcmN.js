import{r as m,f as l,j as t}from"./iframe-CHfAArqL.js";import{S as d}from"./SearchField-iz93VvVz.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C89DnbQR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B9qYaPsL.js";import"./clsx-B-dksMZM.js";import"./Form-CBT2Kr6Z.js";import"./useFocusRing-BLqX-8xD.js";import"./index-DD_A6Sdz.js";import"./index-BO2C6bAK.js";import"./Input-B_9-fJ2Q.js";import"./Hidden-BOX53JQz.js";import"./Button-Kjhz10Fb.js";import"./useLabel-BoRZ5h0h.js";import"./useLabels-8brOlTZV.js";import"./useButton-CXuQG5Fo.js";import"./FieldError-DThBEncI.js";import"./Text-9hAgyQPX.js";import"./clsx-Ciqy0D92.js";import"./Text-C_6I0x6_.js";import"./RSPContexts-CdZqI30k.js";import"./Group-CPEXitlT.js";import"./useControlledState-By7B3ojn.js";import"./useLocalizedStringFormatter-aQ9hIT3Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BhUdXcAj.js";import"./useField-CG5Odj4p.js";import"./TextField.module-DdivwlC8.js";import"./search-CFlkCUuz.js";import"./createLucideIcon-Cv2FgIad.js";import"./x-DIO0llkK.js";import"./useLocalizedStringFormatter-B-k-1dED.js";import"./Button-Cmx0GvV9.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-QI36eTUn.js";import"./Collection-YstYuLwH.js";import"./index-Dr28t-aO.js";import"./DragAndDrop-DHesKqQu.js";import"./getScrollParent-DFfRG1WF.js";import"./scrollIntoView-DiMlvdiv.js";import"./SelectionIndicator-Blsn9PZp.js";import"./SelectionManager-zN7EIGI4.js";import"./useEvent-g8MOXAII.js";import"./useDescription-DeNQGmHX.js";import"./inertValue-DQwpRREb.js";import"./useHighlightSelectionDescription-Bf6uKgps.js";import"./useUpdateEffect-ChikD8Cg.js";import"./ListKeyboardDelegate-Dvro-OxG.js";import"./useHasTabbableChild-BKUruirG.js";import"./Checkbox-4otqPGz-.js";import"./check-CX6EFm-U.js";import"./useToggleState-fXws7rA-.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
