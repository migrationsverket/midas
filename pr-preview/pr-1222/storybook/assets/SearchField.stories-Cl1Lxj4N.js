import{r as m,f as l,j as t}from"./iframe-t1Iclc3O.js";import{S as d}from"./SearchField-CHbxjUQk.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DeK5K4lN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dct5gSIh.js";import"./clsx-B-dksMZM.js";import"./Form-xhJeY9fj.js";import"./useFocusRing-BpTBuj6A.js";import"./index-CA7bmWu8.js";import"./index-BvJk8jeb.js";import"./Input-DaRMHTIT.js";import"./Hidden-CkUuXpVe.js";import"./Button-Ct7y-I4z.js";import"./useLabel-oq7jpXGJ.js";import"./useLabels-D-BGXnYn.js";import"./useButton-DGrW7rRJ.js";import"./FieldError-Dmn3kR1x.js";import"./Text-DMJCfth7.js";import"./clsx-Ciqy0D92.js";import"./Text-BsC3oc9y.js";import"./RSPContexts-UAuwQRBq.js";import"./Group-C4VAEMXP.js";import"./useControlledState-BnBZk0Xv.js";import"./useLocalizedStringFormatter-Bv8tLnmi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B-5YGW10.js";import"./useField-BEiuTqM5.js";import"./TextField.module-DdivwlC8.js";import"./search-CRJSwpH1.js";import"./createLucideIcon-BnrXW6fJ.js";import"./x-DDaTip9H.js";import"./useLocalizedStringFormatter-CiQgcaMc.js";import"./Button-BRu7Bvor.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Mig31NA5.js";import"./Collection-Bu6R6sMK.js";import"./index-DepTptNq.js";import"./DragAndDrop-CV4q4y3F.js";import"./getScrollParent-DF09mu8u.js";import"./scrollIntoView-C_BhVA7v.js";import"./SelectionIndicator-COhxVKzK.js";import"./SelectionManager-T09jeenr.js";import"./useEvent-lx3RMHYY.js";import"./useDescription-Dv4_a3bS.js";import"./inertValue-vcWkrjHE.js";import"./useHighlightSelectionDescription-CEfhGikU.js";import"./useUpdateEffect-C8Midkw6.js";import"./ListKeyboardDelegate-DsWr_BUs.js";import"./useHasTabbableChild-GY6EWB_q.js";import"./Checkbox-CucK6svf.js";import"./check-Cq4vIEvg.js";import"./useToggleState-DzbGuhlt.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
