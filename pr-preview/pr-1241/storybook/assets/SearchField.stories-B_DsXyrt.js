import{r as m,f as l,j as t}from"./iframe-BONLLpOF.js";import{S as d}from"./SearchField-B8vMHSE9.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-SIVl4w91.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C9VmisX4.js";import"./clsx-B-dksMZM.js";import"./Form-ITn35OXk.js";import"./useFocusRing-DKupva6E.js";import"./index-CxKo4ITi.js";import"./index-AexxYhB1.js";import"./Input-CYc6mgVO.js";import"./Hidden-DEirP3-u.js";import"./Button-2Duwp_Ic.js";import"./useLabel-Q48Rkvkt.js";import"./useLabels-Bh7NN-Ow.js";import"./useButton-hyzNfx3L.js";import"./FieldError-D2jIpheU.js";import"./Text-CYi48kKA.js";import"./clsx-Ciqy0D92.js";import"./Text-Cs-XgrOp.js";import"./RSPContexts-DjgvGlJ6.js";import"./Group-C1H1d_QY.js";import"./useControlledState-f1OgfOOU.js";import"./useLocalizedStringFormatter-Bxafu6ud.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-i55viZrJ.js";import"./useField-D7lpa4Ef.js";import"./TextField.module-DdivwlC8.js";import"./search-BkTxfdMZ.js";import"./createLucideIcon-Dg8jUY-5.js";import"./x-SVOUpjtq.js";import"./useLocalizedStringFormatter-BxhbuX7R.js";import"./Button-BxdtuMNq.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DGoVngfB.js";import"./Collection-CyJQtxg_.js";import"./index-B047Z5Cb.js";import"./DragAndDrop-meQ912dC.js";import"./getScrollParent-BgLE-lAx.js";import"./scrollIntoView-BwrYAJjM.js";import"./SelectionIndicator-BstBVfA8.js";import"./SelectionManager-BFJf1PXq.js";import"./useEvent-BT5XuWp7.js";import"./useDescription-xh0FTpCi.js";import"./inertValue-CUJte5NG.js";import"./useHighlightSelectionDescription-t9q77Xtf.js";import"./useUpdateEffect-DOb9g6E8.js";import"./ListKeyboardDelegate-CIuiaVcB.js";import"./useHasTabbableChild-BToqOwTV.js";import"./Checkbox-Bb6d6J24.js";import"./check-DukayblC.js";import"./useToggleState-ByAKyZAC.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
