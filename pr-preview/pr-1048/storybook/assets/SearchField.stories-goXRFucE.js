import{r as m,f as l,j as t}from"./iframe-8Cp1Y9sE.js";import{S as d}from"./SearchField-B2M0vaI4.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BufWVOCi.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DUF8qyUE.js";import"./useObjectRef-BvAFkytn.js";import"./useLocalizedStringFormatter-D6BMfFml.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DbSmU1Kw.js";import"./useFocusRing-CVuxSJk8.js";import"./useFocusable-B-HsSGrd.js";import"./index-CQNUcSLQ.js";import"./index-BHWdZgLR.js";import"./useFormValidation-CQuIVPML.js";import"./useField-Baz6LKsn.js";import"./Button-CqMXkvRN.js";import"./utils-DlEPF17n.js";import"./Hidden-BnGBIuvq.js";import"./number-DfkVkf0F.js";import"./useLabels-CjRcy63q.js";import"./useButton-J5AmJIR7.js";import"./search-BPaXQfAM.js";import"./createLucideIcon-BJQalJwk.js";import"./ClearButton-BBiuE0dm.js";import"./Button-CS2QwEY0.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BDGZG5jK.js";import"./VisuallyHidden-CBA6IUNJ.js";import"./x-7Ctj6V0e.js";import"./FieldError-eZOVGEUO.js";import"./Text-D3HiTtCB.js";import"./Text-Dvlujitk.js";import"./RSPContexts-jWKLjCHM.js";import"./Collection-DueA55zD.js";import"./CollectionBuilder-BKRTkR5P.js";import"./index-Cds1W7-y.js";import"./DragAndDrop-B2vejp6K.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DjxxUBwE.js";import"./SelectionManager-ClNl5D9k.js";import"./useEvent-BWoUQZjL.js";import"./useDescription-BOEa2vWJ.js";import"./inertValue-CrPpiFVp.js";import"./useHighlightSelectionDescription-B0W8hMoH.js";import"./useUpdateEffect-Y4rI-zfK.js";import"./ListKeyboardDelegate-D5IX5CD1.js";import"./useHasTabbableChild-pTgFLEY2.js";import"./Checkbox-CjDKKH4K.js";import"./Form-D0YVSgpe.js";import"./check-CuNr6RM1.js";import"./useToggleState-CnN_X5cY.js";const be={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,p]=m.useState(""),[s]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=s.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:p,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const we=["SimpleSearch"];export{i as SimpleSearch,we as __namedExportsOrder,be as default};
