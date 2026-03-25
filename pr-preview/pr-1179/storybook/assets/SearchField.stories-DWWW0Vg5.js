import{r as m,f as l,j as t}from"./iframe-zC7rO4bQ.js";import{S as d}from"./SearchField-CcVsaZel.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BWEfBhZj.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DJDHHgRa.js";import"./clsx-B-dksMZM.js";import"./Form-q4yO7ogf.js";import"./useFocusRing-BstF4Rhc.js";import"./index-Dv34dGV6.js";import"./index-2cydjPlj.js";import"./Input-zVniGLzA.js";import"./Hidden-iMadBBvo.js";import"./Button-C21x7wzp.js";import"./useLabel-1c7fDk1R.js";import"./useLabels-DXFco5wv.js";import"./useButton-DgxqVrin.js";import"./FieldError-uFgMezhi.js";import"./Text-B2ypy93g.js";import"./clsx-Ciqy0D92.js";import"./Text-Dq6fJTxq.js";import"./RSPContexts-CFrdutnD.js";import"./Group-CrkI56L2.js";import"./useControlledState-B6sghpTG.js";import"./useLocalizedStringFormatter-EHiso99i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ch8VeyvL.js";import"./useField-BJzHfYu3.js";import"./TextField.module-DdivwlC8.js";import"./search-CFwz-Gr8.js";import"./createLucideIcon-BRqO66r7.js";import"./x-Bhv1l1lN.js";import"./useLocalizedStringFormatter-CWhgLXAn.js";import"./Button-w7ryzoNy.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-satwz06w.js";import"./Collection-DxVOSgQD.js";import"./index-BdtYwMvH.js";import"./DragAndDrop-CEPzTng_.js";import"./getScrollParent-DIXAYsd-.js";import"./scrollIntoView-Dr4WxEdF.js";import"./SelectionIndicator-ck_cgyj4.js";import"./SelectionManager-SEkPfouS.js";import"./useEvent-DGX0zBSm.js";import"./useDescription-BPY04rZg.js";import"./inertValue-BwYq_nka.js";import"./useHighlightSelectionDescription-KtX633pG.js";import"./useUpdateEffect-C6WS0x4h.js";import"./ListKeyboardDelegate-eCR6Pu8q.js";import"./useHasTabbableChild-qwRMkjx7.js";import"./Checkbox-Bw1QORQ5.js";import"./check-DTl0Y2Sy.js";import"./useToggleState-D-lEC4-R.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
