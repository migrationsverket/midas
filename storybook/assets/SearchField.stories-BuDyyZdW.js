import{r as m,f as l,j as t}from"./iframe-2y2Syr64.js";import{S as d}from"./SearchField-DRoSwRNe.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Ch13JoQo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-QeTQioJq.js";import"./clsx-B-dksMZM.js";import"./Form-BxZc3HF8.js";import"./useFocusRing-g5rhpMio.js";import"./index-CzLxwmqr.js";import"./index-DXQBrJfU.js";import"./Input-BRAc1KwA.js";import"./Hidden-B__XOjR0.js";import"./Button-9fFVOiJo.js";import"./useLabel-DEokNCv9.js";import"./useLabels-CDVQ8Dai.js";import"./useButton-BGrK01YR.js";import"./FieldError-C0y0OPWO.js";import"./Text-CjKUI5Vp.js";import"./clsx-Ciqy0D92.js";import"./Text-BstWv5qu.js";import"./RSPContexts-B0u5lwvT.js";import"./Group-gZuaeyva.js";import"./useControlledState-CNntbmuw.js";import"./useLocalizedStringFormatter-ChuRjCa_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CnQ0BvwO.js";import"./useField-DPhi4f-8.js";import"./TextField.module-DdivwlC8.js";import"./search-D98Rh5bf.js";import"./createLucideIcon-CukoxtoU.js";import"./x-CmHq6MLN.js";import"./useLocalizedStringFormatter-C8Cfl7Hj.js";import"./Button-D69d27MT.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CwQymDfp.js";import"./Collection-BqbqFyGC.js";import"./index-DGABZHHf.js";import"./DragAndDrop-BWShyovs.js";import"./getScrollParent-DZSok8Rc.js";import"./scrollIntoView-lPomJvMQ.js";import"./SelectionIndicator-DICBnb9I.js";import"./SelectionManager-CxkhtBsq.js";import"./useEvent-BoNgmAiC.js";import"./useDescription-DxQUmr3s.js";import"./inertValue-7h2ltB_f.js";import"./useHighlightSelectionDescription-BdBOnm3B.js";import"./useUpdateEffect-Cg6iEtUl.js";import"./ListKeyboardDelegate-SQ3uUgz7.js";import"./useHasTabbableChild-Ze8uz-yy.js";import"./Checkbox-D_Z7kvnV.js";import"./check-IeCNBJHc.js";import"./useToggleState-BdyqZ7Tk.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
